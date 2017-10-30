/* The Computer Language Benchmarks Game

   http://benchmarksgame.alioth.debian.org/

   Contributed by Philip Rogers
   Based on a javascript implementation by Jesse Millikan and Matt Baker
   */

import 'dart:collection';
import "common/IO.dart";
import "common/BenchmarkBase.dart";

int inputindex = -1;

//String readLine() => stdin.readLineSync();

main() {
  new Knucleotide().report();
}

String readLine() {
  inputindex++;
  if (inputindex >= inputArray.length) {
    return null;
  }
  else {
    return inputArray[inputindex];
  }
}

String readInput() {
  while(readLine().substring(0, 6) != '>THREE');

  List<String> lines = new List();
  String line = readLine();
  while (line != null && line[0] != '>') {
    lines.add(line);
    line = readLine();
  };
  return lines.join('').toUpperCase();
}

HashMap<String, int> frequency(String sequence, int length) {
  HashMap<String, int> freq = new HashMap<String, int>();
  int n = sequence.length - length + 1;
  String sub;
  for (int i = 0; i < n; i++) {
    sub = sequence.substring(i, i + length);
    if (freq.containsKey(sub))
      freq[sub] = freq[sub] + 1;
    else
      freq[sub] = 1;
  }
  return freq;
}

void sort(String sequence, int length) {
  HashMap<String, int> freq = frequency(sequence, length);
  List<String> keys = freq.keys.toList();
  int n = sequence.length - length + 1;
  keys.sort((a, b) => (freq[b] - freq[a]));
  for (String key in keys) {
    String count = (freq[key] * 100 / n).toStringAsFixed(3);
    //print('$key $count');
  }
  //print('');
}

void find(String sequence, String string) {
  HashMap<String, int> freq = frequency(sequence, string.length);
  //print('${(freq[string])}\t$string');
}

class Knucleotide extends BenchmarkBase {
  const Knucleotide() : super('Knucleotide');
  void run() {
    String sequence = readInput();
    if (sequence == null)
      return;
    sort(sequence, 1);
    sort(sequence, 2);
    find(sequence, 'GGT');
    find(sequence, 'GGTA');
    find(sequence, 'GGTATT');
    find(sequence, 'GGTATTTTAATT');
    find(sequence, 'GGTATTTTAATTTATAGT');
    inputindex = -1;
  }

  void exercise() {
    for (int i = 0; i < 1000; i++) {
      run();
    }
  }
}
