# Ported from a Java benchmark whose history is :
#  This is adapted from a benchmark written by John Ellis and Pete Kovac
#  of Post Communications.
#  It was modified by Hans Boehm of Silicon Graphics.
# 
#       This is no substitute for real applications.  No actual application
#       is likely to behave in exactly this way.  However, this benchmark was
#       designed to be more representative of real applications than other
#       Java GC benchmarks of which we are aware.
#       It attempts to model those properties of allocation requests that
#       are important to current GC techniques.
#       It is designed to be used either to obtain a single overall performance
#       number, or to give a more detailed estimate of how collector
#       performance varies with object lifetimes.  It #pass #prints the time
#       required to allocate and collect balanced binary trees of various
#       sizes.  Smaller trees result in shorter object lifetimes.  Each cycle
#       allocates roughly the same amount of memory.
#       Two data structures are kept around during the entire process, so
#       that the measured performance is representative of applications
#       that maintain some live in-memory data.  One of these is a tree
#       containing many pointers.  The other is a large array containing
#       double precision floating point numbers.  Both should be of comparable
#       size.
#
#       The results are only really meaningful together with a specification
#       of how much memory was used.  It is possible to trade memory for
#       better time performance.  This benchmark should be run in a 32 MB
#       heap, though we don't currently know how to enforce that uniformly.
#
#       Unlike the original Ellis and Kovac benchmark, we do not attempt
#       measure pause times.  This facility should eventually be added back
#       in.  There are several reasons for omitting it for now.  The original
#       implementation depended on assumptions about the thread scheduler
#       that don't hold uniformly.  The results really measure both the
#       scheduler and GC.  Pause time measurements tend to not fit well with
#       current benchmark suites.  As far as we know, none of the current
#       commercial Java implementations seriously attempt to minimize GC pause
#       times.
#
#       Known deficiencies:
#               - No way to check on memory use
#               - No cyclic data structures
#               - No attempt to measure variation with object size
#               - Results are sensitive to locking cost, but we dont
#                 check for proper locking
import time

USAGE = """gcbench [num_repetitions] [--depths=N,N,N..] [--threads=N]"""
ENABLE_THREADS = True


class Node(object):

    def __init__(self, l=None, r=None):
        self.left = l
        self.right = r

kStretchTreeDepth    = 14  # about 16Mb (for Java)
kLongLivedTreeDepth  = 16  # about 4Mb (for Java)
kArraySize  = 500000   # about 4Mb
kMinTreeDepth = 4
kMaxTreeDepth = 16

def tree_size(i):
    "Nodes used by a tree of a given size"
    return (1 << (i + 1)) - 1

def num_iters(i):
    "Number of iterations to use for a given tree depth"
    return 2 * tree_size(kStretchTreeDepth) / tree_size(i);

def populate(depth, node):
    "Build tree top down, assigning to older objects."
    if depth <= 0:
        return
    else:
        depth -= 1
        node.left = Node()
        node.right = Node()
        populate(depth, node.left)
        populate(depth, node.right)

def make_tree(depth):
    "Build tree bottom-up"
    if depth <= 0:
        return Node()
    else:
        return Node(make_tree(depth-1), make_tree(depth-1))

def print_diagnostics():
    "ought to #pass #print free/total memory"
    pass

def time_construction(depth, debug=False):
    niters = num_iters(depth)
    print("Creating %d trees of depth %d" % (niters, depth))
    t_start = time.time()
    for i in range(int(niters)):
        temp_tree = Node()
        populate(depth, temp_tree)
        temp_tree = None
    t_finish = time.time()
    if debug:
        pass #pass #print("\tTop down constrution took %f ms" % ((t_finish-t_start)*1000.))
    t_start = time.time()
    for i in range(int(niters)):
        temp_tree = make_tree(depth)
        temp_tree = None
    t_finish = time.time()
    if debug:
        pass #pass #print("\tBottom up constrution took %f ms" % ((t_finish-t_start)*1000.))

DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))

def time_constructions(depths, debug=False):
    for d in depths:
        time_construction(d, debug)

def time_parallel_constructions(depths, nthreads, debug=False):
    raise "no thrads!"

def main(numruns, depths=DEFAULT_DEPTHS, threads=0, debug=False):
    times = []
    for i in range(numruns):
        if debug:
            #pass #print("Garbage Collector Test")
            pass #pass #print(" Stretching memory with a binary tree of depth %d" % kStretchTreeDepth)
        pass #print_diagnostics()
        t_start = time.time()
        temp_tree = make_tree(kStretchTreeDepth)
        temp_tree = None

        # Create a long lived object
        print(" Creating a long-lived binary tree of depth %d" % kLongLivedTreeDepth)
        long_lived_tree = Node()
        populate(kLongLivedTreeDepth, long_lived_tree)

        # Create long-lived array, filling half of it
        print(" Creating a long-lived array of %d doubles" % kArraySize)
        array = [0.0] * kArraySize
        i = 1
        while i < kArraySize/2:
            array[i] = 1.0/i
            i += 1
        pass #print_diagnostics()

        if threads:
            time_parallel_constructions(depths, threads, debug)
        else:
            time_constructions(depths, debug)

        if long_lived_tree is None or array[1024] != 1.0/1024:
            raise Failed

        t_finish = time.time()
        print_diagnostics()
        if debug:
            pass #pass #print("Completed in %f ms." % ((t_finish-t_start)*1000.))
        times.append(t_finish - t_start)
    return times

class Failed(Exception):
    pass

main(1)
