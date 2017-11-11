/**
 * NOTE(rachit) This requires the bignum library to be installed in the current
 * directory
 */

/* The Computer Language Benchmarks Game
   http://benchmarksgame.alioth.debian.org/

   contributed by Sébastien Arnaud
   */
import 'package:bignum/bignum.dart';
import 'common/BenchmarkBase.dart';

String pad(i, last) {
  var res = i.toString(), count;
  count = 10 - res.length;
  while (count > 0) {
    last ? res += ' ' : res = '0' + res;
    count--;
  }
  return res;
}

void calculatePi(N) {
  var i = 0, ns = 0;

  BigInteger bigint_TEN = new BigInteger(10);
  BigInteger k = BigInteger.ZERO;
  BigInteger k1 = BigInteger.ONE;
  BigInteger a = BigInteger.ZERO;
  BigInteger d = BigInteger.ONE;
  BigInteger m = BigInteger.ZERO;
  BigInteger n = BigInteger.ONE;
  BigInteger t = BigInteger.ZERO;
  BigInteger u = BigInteger.ZERO;

  while (true) {
    k = k.add(BigInteger.ONE);
    k1 = k1.add(BigInteger.TWO);
    t = n.shiftLeft(1);
    n = n.multiply(k);
    a = a.add(t).multiply(k1);
    d = d.multiply(k1);

    if (a.compareTo(n) >= 0) {
      m = n.multiply(BigInteger.THREE).add(a);
      t = m.divide(d);
      u = m.mod(d).add(n);

      if (d.compareTo(u) > 0) {
        ns = ns * 10 + t.intValue();
        i += 1;

        var last = i >= N;
        if (i % 10 == 0 || last) {
          pad(ns, last);
          ns = 0;
        }

        if (last) break;

        a = a.subtract(d.multiply(t)).multiply(bigint_TEN);
        n = n.multiply(bigint_TEN);
      }
    }
  }
}

class PiDigits extends BenchmarkBase {
  const PiDigits(): super('PiDigits');

  void run() {
    int N = 2000;
    calculatePi(N);
  }

  void main() {
    run();
  }

  void exercise() {
    run();
  }
}

main() {
  new PiDigits().report();
}
