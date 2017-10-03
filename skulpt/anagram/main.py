# From LING 682C at UMass Amherst
import sys

def scrambler(word):
	if len(word) == 1:
		nstrings = [word]
		return nstrings
	else:
		uniqueList = list(word)
		finals = []
		char = uniqueList[0]
		tail = ''.join(uniqueList[1:])
		nstrings = list(set(scrambler(tail)))
		for n in nstrings:
			for i in range(0,len(n)+1):
				newfinal = n[0:i]+char+n[i:len(n)]
				finals.append(newfinal)
		return list(set(finals))

scrambles = scrambler("berrycakes")
print len(scrambles)
