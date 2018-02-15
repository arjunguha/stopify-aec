/* The Computer Language Benchmarks Game
http://benchmarksgame.alioth.debian.org/

Contributed by Jimmy Lu
*/

//import java.io.InputStream

import scala.annotation.switch
import scala.collection.immutable.SortedSet
import scala.collection.mutable
//import scala.collection.parallel.ParSeq
//import scala.io.Source

object IO {

  val input = """>ONE Homo sapiens alu
GGCCGGGCGCGGTGGCTCACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGA
TCACCTGAGGTCAGGAGTTCGAGACCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACT
AAAAATACAAAAATTAGCCGGGCGTGGTGGCGCGCGCCTGTAATCCCAGCTACTCGGGAG
GCTGAGGCAGGAGAATCGCTTGAACCCGGGAGGCGGAGGTTGCAGTGAGCCGAGATCGCG
CCACTGCACTCCAGCCTGGGCGACAGAGCGAGACTCCGTCTCAAAAAGGCCGGGCGCGGT
GGCTCACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGATCACCTGAGGTCA
GGAGTTCGAGACCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAATACAAAAA
TTAGCCGGGCGTGGTGGCGCGCGCCTGTAATCCCAGCTACTCGGGAGGCTGAGGCAGGAG
AATCGCTTGAACCCGGGAGGCGGAGGTTGCAGTGAGCCGAGATCGCGCCACTGCACTCCA
GCCTGGGCGACAGAGCGAGACTCCGTCTCAAAAAGGCCGGGCGCGGTGGCTCACGCCTGT
AATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGATCACCTGAGGTCAGGAGTTCGAGACC
AGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAATACAAAAATTAGCCGGGCGTG
GTGGCGCGCGCCTGTAATCCCAGCTACTCGGGAGGCTGAGGCAGGAGAATCGCTTGAACC
CGGGAGGCGGAGGTTGCAGTGAGCCGAGATCGCGCCACTGCACTCCAGCCTGGGCGACAG
AGCGAGACTCCGTCTCAAAAAGGCCGGGCGCGGTGGCTCACGCCTGTAATCCCAGCACTT
TGGGAGGCCGAGGCGGGCGGATCACCTGAGGTCAGGAGTTCGAGACCAGCCTGGCCAACA
TGGTGAAACCCCGTCTCTACTAAAAATACAAAAATTAGCCGGGCGTGGTGGCGCGCGCCT
GTAATCCCAGCTACTCGGGAGGCTGAGGCAGGAGAATCGCTTGAACCCGGGAGGCGGAGG
TTGCAGTGAGCCGAGATCGCGCCACTGCACTCCAGCCTGGGCGACAGAGCGAGACTCCGT
CTCAAAAAGGCCGGGCGCGGTGGCTCACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGG
CGGGCGGATCACCTGAGGTCAGGAGTTCGAGACCAGCCTGGCCAACATGGTGAAACCCCG
TCTCTACTAAAAATACAAAAATTAGCCGGGCGTGGTGGCGCGCGCCTGTAATCCCAGCTA
CTCGGGAGGCTGAGGCAGGAGAATCGCTTGAACCCGGGAGGCGGAGGTTGCAGTGAGCCG
AGATCGCGCCACTGCACTCCAGCCTGGGCGACAGAGCGAGACTCCGTCTCAAAAAGGCCG
GGCGCGGTGGCTCACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGATCACC
TGAGGTCAGGAGTTCGAGACCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAA
TACAAAAATTAGCCGGGCGTGGTGGCGCGCGCCTGTAATCCCAGCTACTCGGGAGGCTGA
GGCAGGAGAATCGCTTGAACCCGGGAGGCGGAGGTTGCAGTGAGCCGAGATCGCGCCACT
GCACTCCAGCCTGGGCGACAGAGCGAGACTCCGTCTCAAAAAGGCCGGGCGCGGTGGCTC
ACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGATCACCTGAGGTCAGGAGT
TCGAGACCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAATACAAAAATTAGC
CGGGCGTGGTGGCGCGCGCCTGTAATCCCAGCTACTCGGGAGGCTGAGGCAGGAGAATCG
CTTGAACCCGGGAGGCGGAGGTTGCAGTGAGCCGAGATCGCGCCACTGCACTCCAGCCTG
GGCGACAGAGCGAGACTCCG
>TWO IUB ambiguity codes
cttBtatcatatgctaKggNcataaaSatgtaaaDcDRtBggDtctttataattcBgtcg
tactDtDagcctatttSVHtHttKtgtHMaSattgWaHKHttttagacatWatgtRgaaa
NtactMcSMtYtcMgRtacttctWBacgaaatatagScDtttgaagacacatagtVgYgt
cattHWtMMWcStgttaggKtSgaYaaccWStcgBttgcgaMttBYatcWtgacaYcaga
gtaBDtRacttttcWatMttDBcatWtatcttactaBgaYtcttgttttttttYaaScYa
HgtgttNtSatcMtcVaaaStccRcctDaataataStcYtRDSaMtDttgttSagtRRca
tttHatSttMtWgtcgtatSSagactYaaattcaMtWatttaSgYttaRgKaRtccactt
tattRggaMcDaWaWagttttgacatgttctacaaaRaatataataaMttcgDacgaSSt
acaStYRctVaNMtMgtaggcKatcttttattaaaaagVWaHKYagtttttatttaacct
tacgtVtcVaattVMBcttaMtttaStgacttagattWWacVtgWYagWVRctDattBYt
gtttaagaagattattgacVatMaacattVctgtBSgaVtgWWggaKHaatKWcBScSWa
accRVacacaaactaccScattRatatKVtactatatttHttaagtttSKtRtacaaagt
RDttcaaaaWgcacatWaDgtDKacgaacaattacaRNWaatHtttStgttattaaMtgt
tgDcgtMgcatBtgcttcgcgaDWgagctgcgaggggVtaaScNatttacttaatgacag
cccccacatYScaMgtaggtYaNgttctgaMaacNaMRaacaaacaKctacatagYWctg
ttWaaataaaataRattagHacacaagcgKatacBttRttaagtatttccgatctHSaat
actcNttMaagtattMtgRtgaMgcataatHcMtaBSaRattagttgatHtMttaaKagg
YtaaBataSaVatactWtataVWgKgttaaaacagtgcgRatatacatVtHRtVYataSa
KtWaStVcNKHKttactatccctcatgWHatWaRcttactaggatctataDtDHBttata
aaaHgtacVtagaYttYaKcctattcttcttaataNDaaggaaaDYgcggctaaWSctBa
aNtgctggMBaKctaMVKagBaactaWaDaMaccYVtNtaHtVWtKgRtcaaNtYaNacg
gtttNattgVtttctgtBaWgtaattcaagtcaVWtactNggattctttaYtaaagccgc
tcttagHVggaYtgtNcDaVagctctctKgacgtatagYcctRYHDtgBattDaaDgccK
tcHaaStttMcctagtattgcRgWBaVatHaaaataYtgtttagMDMRtaataaggatMt
ttctWgtNtgtgaaaaMaatatRtttMtDgHHtgtcattttcWattRSHcVagaagtacg
ggtaKVattKYagactNaatgtttgKMMgYNtcccgSKttctaStatatNVataYHgtNa
BKRgNacaactgatttcctttaNcgatttctctataScaHtataRagtcRVttacDSDtt
aRtSatacHgtSKacYagttMHtWataggatgactNtatSaNctataVtttRNKtgRacc
tttYtatgttactttttcctttaaacatacaHactMacacggtWataMtBVacRaSaatc
cgtaBVttccagccBcttaRKtgtgcctttttRtgtcagcRttKtaaacKtaaatctcac
aattgcaNtSBaaccgggttattaaBcKatDagttactcttcattVtttHaaggctKKga
tacatcBggScagtVcacattttgaHaDSgHatRMaHWggtatatRgccDttcgtatcga
aacaHtaagttaRatgaVacttagattVKtaaYttaaatcaNatccRttRRaMScNaaaD
gttVHWgtcHaaHgacVaWtgttScactaagSgttatcttagggDtaccagWattWtRtg
ttHWHacgattBtgVcaYatcggttgagKcWtKKcaVtgaYgWctgYggVctgtHgaNcV
taBtWaaYatcDRaaRtSctgaHaYRttagatMatgcatttNattaDttaattgttctaa
ccctcccctagaWBtttHtBccttagaVaatMcBHagaVcWcagBVttcBtaYMccagat
gaaaaHctctaacgttagNWRtcggattNatcRaNHttcagtKttttgWatWttcSaNgg
gaWtactKKMaacatKatacNattgctWtatctaVgagctatgtRaHtYcWcttagccaa
tYttWttaWSSttaHcaaaaagVacVgtaVaRMgattaVcDactttcHHggHRtgNcctt
tYatcatKgctcctctatVcaaaaKaaaagtatatctgMtWtaaaacaStttMtcgactt
taSatcgDataaactaaacaagtaaVctaggaSccaatMVtaaSKNVattttgHccatca
cBVctgcaVatVttRtactgtVcaattHgtaaattaaattttYtatattaaRSgYtgBag
aHSBDgtagcacRHtYcBgtcacttacactaYcgctWtattgSHtSatcataaatataHt
cgtYaaMNgBaatttaRgaMaatatttBtttaaaHHKaatctgatWatYaacttMctctt
ttVctagctDaaagtaVaKaKRtaacBgtatccaaccactHHaagaagaaggaNaaatBW
attccgStaMSaMatBttgcatgRSacgttVVtaaDMtcSgVatWcaSatcttttVatag
ttactttacgatcaccNtaDVgSRcgVcgtgaacgaNtaNatatagtHtMgtHcMtagaa
attBgtataRaaaacaYKgtRccYtatgaagtaataKgtaaMttgaaRVatgcagaKStc
tHNaaatctBBtcttaYaBWHgtVtgacagcaRcataWctcaBcYacYgatDgtDHccta
>THREE Homo sapiens frequency
aacacttcaccaggtatcgtgaaggctcaagattacccagagaacctttgcaatataaga
atatgtatgcagcattaccctaagtaattatattctttttctgactcaaagtgacaagcc
ctagtgtatattaaatcggtatatttgggaaattcctcaaactatcctaatcaggtagcc
atgaaagtgatcaaaaaagttcgtacttataccatacatgaattctggccaagtaaaaaa
tagattgcgcaaaattcgtaccttaagtctctcgccaagatattaggatcctattactca
tatcgtgtttttctttattgccgccatccccggagtatctcacccatccttctcttaaag
gcctaatattacctatgcaaataaacatatattgttgaaaattgagaacctgatcgtgat
tcttatgtgtaccatatgtatagtaatcacgcgactatatagtgctttagtatcgcccgt
gggtgagtgaatattctgggctagcgtgagatagtttcttgtcctaatatttttcagatc
gaatagcttctatttttgtgtttattgacatatgtcgaaactccttactcagtgaaagtc
atgaccagatccacgaacaatcttcggaatcagtctcgttttacggcggaatcttgagtc
taacttatatcccgtcgcttactttctaacaccccttatgtatttttaaaattacgttta
ttcgaacgtacttggcggaagcgttattttttgaagtaagttacattgggcagactcttg
acattttcgatacgactttctttcatccatcacaggactcgttcgtattgatatcagaag
ctcgtgatgattagttgtcttctttaccaatactttgaggcctattctgcgaaatttttg
ttgccctgcgaacttcacataccaaggaacacctcgcaacatgccttcatatccatcgtt
cattgtaattcttacacaatgaatcctaagtaattacatccctgcgtaaaagatggtagg
ggcactgaggatatattaccaagcatttagttatgagtaatcagcaatgtttcttgtatt
aagttctctaaaatagttacatcgtaatgttatctcgggttccgcgaataaacgagatag
attcattatatatggccctaagcaaaaacctcctcgtattctgttggtaattagaatcac
acaatacgggttgagatattaattatttgtagtacgaagagatataaaaagatgaacaat
tactcaagtcaagatgtatacgggatttataataaaaatcgggtagagatctgctttgca
attcagacgtgccactaaatcgtaatatgtcgcgttacatcagaaagggtaactattatt
aattaataaagggcttaatcactacatattagatcttatccgatagtcttatctattcgt
tgtatttttaagcggttctaattcagtcattatatcagtgctccgagttctttattattg
ttttaaggatgacaaaatgcctcttgttataacgctgggagaagcagactaagagtcgga
gcagttggtagaatgaggctgcaaaagacggtctcgacgaatggacagactttactaaac
caatgaaagacagaagtagagcaaagtctgaagtggtatcagcttaattatgacaaccct
taatacttccctttcgccgaatactggcgtggaaaggttttaaaagtcgaagtagttaga
ggcatctctcgctcataaataggtagactactcgcaatccaatgtgactatgtaatactg
ggaacatcagtccgcgatgcagcgtgtttatcaaccgtccccactcgcctggggagacat
gagaccacccccgtggggattattagtccgcagtaatcgactcttgacaatccttttcga
ttatgtcatagcaatttacgacagttcagcgaagtgactactcggcgaaatggtattact
aaagcattcgaacccacatgaatgtgattcttggcaatttctaatccactaaagcttttc
cgttgaatctggttgtagatatttatataagttcactaattaagatcacggtagtatatt
gatagtgatgtctttgcaagaggttggccgaggaatttacggattctctattgatacaat
ttgtctggcttataactcttaaggctgaaccaggcgtttttagacgacttgatcagctgt
tagaatggtttggactccctctttcatgtcagtaacatttcagccgttattgttacgata
tgcttgaacaatattgatctaccacacacccatagtatattttataggtcatgctgttac
ctacgagcatggtattccacttcccattcaatgagtattcaacatcactagcctcagaga
tgatgacccacctctaataacgtcacgttgcggccatgtgaaacctgaacttgagtagac
gatatcaagcgctttaaattgcatataacatttgagggtaaagctaagcggatgctttat
ataatcaatactcaataataagatttgattgcattttagagttatgacacgacatagttc
actaacgagttactattcccagatctagactgaagtactgatcgagacgatccttacgtc
gatgatcgttagttatcgacttaggtcgggtctctagcggtattggtacttaaccggaca
ctatactaataacccatgatcaaagcataacagaatacagacgataatttcgccaacata
tatgtacagaccccaagcatgagaagctcattgaaagctatcattgaagtcccgctcaca
atgtgtcttttccagacggtttaactggttcccgggagtcctggagtttcgacttacata
aatggaaacaatgtattttgctaatttatctatagcgtcatttggaccaatacagaatat
tatgttgcctagtaatccactataacccgcaagtgctgatagaaaatttttagacgattt
ataaatgccccaagtatccctcccgtgaatcctccgttatactaattagtattcgttcat
acgtataccgcgcatatatgaacatttggcgataaggcgcgtgaattgttacgtgacaga
gatagcagtttcttgtgatatggttaacagacgtacatgaagggaaactttatatctata
gtgatgcttccgtagaaataccgccactggtctgccaatgatgaagtatgtagctttagg
tttgtactatgaggctttcgtttgtttgcagagtataacagttgcgagtgaaaaaccgac
gaatttatactaatacgctttcactattggctacaaaatagggaagagtttcaatcatga
gagggagtatatggatgctttgtagctaaaggtagaacgtatgtatatgctgccgttcat
tcttgaaagatacataagcgataagttacgacaattataagcaacatccctaccttcgta
acgatttcactgttactgcgcttgaaatacactatggggctattggcggagagaagcaga
tcgcgccgagcatatacgagacctataatgttgatgatagagaaggcgtctgaattgata
catcgaagtacactttctttcgtagtatctctcgtcctctttctatctccggacacaaga
attaagttatatatatagagtcttaccaatcatgttgaatcctgattctcagagttcttt
ggcgggccttgtgatgactgagaaacaatgcaatattgctccaaatttcctaagcaaatt
ctcggttatgttatgttatcagcaaagcgttacgttatgttatttaaatctggaatgacg
gagcgaagttcttatgtcggtgtgggaataattcttttgaagacagcactccttaaataa
tatcgctccgtgtttgtatttatcgaatgggtctgtaaccttgcacaagcaaatcggtgg
tgtatatatcggataacaattaatacgatgttcatagtgacagtatactgatcgagtcct
ctaaagtcaattacctcacttaacaatctcattgatgttgtgtcattcccggtatcgccc
gtagtatgtgctctgattgaccgagtgtgaaccaaggaacatctactaatgcctttgtta
ggtaagatctctctgaattccttcgtgccaacttaaaacattatcaaaatttcttctact
tggattaactacttttacgagcatggcaaattcccctgtggaagacggttcattattatc
ggaaaccttatagaaattgcgtgttgactgaaattagatttttattgtaagagttgcatc
tttgcgattcctctggtctagcttccaatgaacagtcctcccttctattcgacatcgggt
ccttcgtacatgtctttgcgatgtaataattaggttcggagtgtggccttaatgggtgca
actaggaatacaacgcaaatttgctgacatgatagcaaatcggtatgccggcaccaaaac
gtgctccttgcttagcttgtgaatgagactcagtagttaaataaatccatatctgcaatc
gattccacaggtattgtccactatctttgaactactctaagagatacaagcttagctgag
accgaggtgtatatgactacgctgatatctgtaaggtaccaatgcaggcaaagtatgcga
gaagctaataccggctgtttccagctttataagattaaaatttggctgtcctggcggcct
cagaattgttctatcgtaatcagttggttcattaattagctaagtacgaggtacaactta
tctgtcccagaacagctccacaagtttttttacagccgaaacccctgtgtgaatcttaat
atccaagcgcgttatctgattagagtttacaactcagtattttatcagtacgttttgttt
ccaacattacccggtatgacaaaatgacgccacgtgtcgaataatggtctgaccaatgta
ggaagtgaaaagataaatat"""

  val inputArray = input.split("\n")

}

object knucleotide {
  def main(args: Array[String]): Unit = {
    val sequence = extractSequence(/*System.in, */"THREE")
    val (cs1, cs2) = Seq(18, 12, 6, 4, 3, 2, 1).map {
      count(sequence, _)
    }.seq.reverse.splitAt(2)

    for ((c, i) <- cs1.zipWithIndex) {
      for ((s, freq) <- frequency(i + 1, c))
        printf("%s %.3f%n", s.toUpperCase, freq * 100)
        println()
    }

    for ((c, s) <- (cs2, Seq("ggt",
         "ggta",
         "ggtatt",
         "ggtattttaatt",
         "ggtattttaatttatagt")).zipped) {
           val n = c.get(encode(s.getBytes, 0, s.length)).fold(0)(_.n)
           printf("%d\t%s%n", n, s.toUpperCase)
         }
  }

  def extractSequence(/*input: InputStream, */name: String): Array[Byte] = {
    val description = ">" + name
    val builder = Array.newBuilder[Byte]
    builder.sizeHint(4 << 20)

    val lines = /*Source.fromInputStream(input).getLines()*/ IO.inputArray
      .dropWhile {
        !_.startsWith(description)
      }.drop(1).takeWhile(!_.startsWith(">"))

    lines.foreach(builder ++= _.getBytes)

    builder.result()
  }

  class Counter(var n: Int)

  def count(sequence: Array[Byte], length: Int): mutable.LongMap[Counter] = {
    val m = mutable.LongMap.empty[Counter]
    var i = 0
    val end = sequence.length - length + 1
    while (i < end) {
      val k = encode(sequence, i, length)
      try {
        val c = m(k)
        c.n += 1
      } catch {
        case _: NoSuchElementException => m.update(k, new Counter(1))
      }
      i += 1
    }
    m
  }

  def frequency(
    length: Int,
    count: collection.Map[Long, Counter]
  ): Iterable[(String, Double)] = {
    val sum = count.values.map(_.n).sum.asInstanceOf[Double]
    val builder =
      SortedSet.newBuilder(Ordering.by[(String, Double), Double](_._2).reverse)
    for ((k, v) <- count)
      builder += ((new String(decode(k, length)), v.n / sum))
      builder.result()
  }

  def encode(sequence: Array[Byte], offset: Int, length: Int): Long = {
    // assert(length <= 32)
    var n = 0L
    var i = 0
    while (i < length) {
      val m = (sequence(offset + i): @switch) match {
        case 'a' => 0
        case 'c' => 1
        case 'g' => 2
        case 't' => 3
      }
      n <<= 2
      n |= m
      i += 1
    }
    n
  }

  def decode(n: Long, length: Int): Array[Byte] = {
    val bs = Array.ofDim[Byte](length)
    var nn = n
    var i = length - 1
    while (i >= 0) {
      bs(i) = ((nn & 3).asInstanceOf[Int]: @switch) match {
        case 0 => 'a'
        case 1 => 'c'
        case 2 => 'g'
        case 3 => 't'
      }
      nn >>= 2
      i -= 1
    }
    bs
  }
}
