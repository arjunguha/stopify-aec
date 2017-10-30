/* The Computer Language Benchmarks game
   http://benchmarksgame.alioth.debian.org/

   contributed by Jos Hirth, transliterated from Jarkko Miettinen's Java program
 *reset*

 Modified by Rachit Nigam on 10.04.2017
 */

import "common/BenchmarkBase.dart";
final int minDepth = 4;

main(){
  new BinaryTree().report();
}

class BinaryTree extends BenchmarkBase {
  const BinaryTree() : super('BinaryTree');

  void setup() {}
  void teardown() {}
  void run () {
    int n = 20;

    int maxDepth = (minDepth + 2 > n) ? minDepth + 2 : n;
    int stretchDepth = maxDepth + 1;

    int check = (TreeNode.bottomUpTree(stretchDepth)).itemCheck();

    TreeNode longLivedTree = TreeNode.bottomUpTree(maxDepth);

    for (int depth = minDepth; depth <= maxDepth; depth += 2){
      int iterations = 1 << (maxDepth - depth + minDepth);
      check = 0;

      for (int i = 1; i <= iterations; i++){
        check += (TreeNode.bottomUpTree(depth)).itemCheck();
      }
    }
  }
  void main() {
    run();
  }
  void warmup() {
    run();
  }
  void exercise() {
    run();
  }
}


class TreeNode{
  TreeNode left, right;

  TreeNode([this.left, this.right]);

  static TreeNode bottomUpTree(int depth){
    if (depth > 0){
      return new TreeNode(
        bottomUpTree(depth - 1),
        bottomUpTree(depth - 1)
      );
    }
    return new TreeNode();
  }

  int itemCheck(){
    if (left == null){
      return 1;
    }
    return 1 + left.itemCheck() + right.itemCheck();
  }
}
