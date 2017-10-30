/* The Computer Language Benchmarks Game
   http://benchmarksgame.alioth.debian.org/

   regex-dna program contributed by Jos Hirth, based on the JavaScript version
   which was created by Jesse Millikan, jose fco. gonzalez, and Matthew Wilson

   converted from regex-dna program
   */

//import 'dart:io';
import 'dart:convert';
import 'common/IO.dart';
import 'common/BenchmarkBase.dart';

void main() {
  new Regexredux().report();
}

class Regexredux extends BenchmarkBase {
  const Regexredux() : super('Regexredux');

  void run() {
    //var text = new StringBuffer();
    //var src = stdin.transform(UTF8.decoder).transform(new LineSplitter());

    //src.listen((line) {
    //if (line != null) {
    //text.write(line);
    //text.write('\n');
    //}
    //},
    //onDone: () {
    //regexAllTheThings(text.toString());
    //});

    regexAllTheThings(input);
  }

  void exercise() {
    for (int i = 0; i < 1000; i++) {
      run();
    }
  }
}

void regexAllTheThings (String fullText) {
  var lengthA, lengthB, lengthC, regexp, replacements;

  regexp = ((){
    var pattern = [
      'agggtaaa|tttaccct',
      '[cgt]gggtaaa|tttaccc[acg]',
      'a[act]ggtaaa|tttacc[agt]t',
      'ag[act]gtaaa|tttac[agt]ct',
      'agg[act]taaa|ttta[agt]cct',
      'aggg[acg]aaa|ttt[cgt]ccct',
      'agggt[cgt]aa|tt[acg]accct',
      'agggta[cgt]a|t[acg]taccct',
      'agggtaa[cgt]|[acg]ttaccct'
    ];
    var regexp = [];
    for(var p in pattern) {
      regexp.add(new RegExp(p, caseSensitive: false));
    }
    return regexp;
  }());

  replacements = [
    'tHa[Nt]', '<4>',
    'aND|caN|Ha[DS]|WaS', '<3>',
    'a[NSt]|BY', '<2>',
    '<[^>]*>', '|',
    '\\|[^|][^|]*\\|', '-'
  ];

  lengthA = fullText.length;

  fullText = fullText.replaceAll(new RegExp('^>.*\n|\n', multiLine: true), ''); // still ridiculously slow with r21658

  lengthB = fullText.length;

  for(var i = 0; i < regexp.length; ++i) {
    regexp[i].pattern; regexp[i].allMatches(fullText).length;
  }

  for(var i = -1; i < replacements.length - 1;) {
    fullText = fullText.replaceAll(new RegExp(replacements[++i]), replacements[++i]);
  }

  lengthC = fullText.length;

  //print('\n$lengthA\n$lengthB\n$lengthC');
}
