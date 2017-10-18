/*                     __                                               *\
**     ________ ___   / /  ___      __ ____  Scala.js Benchmarks        **
**    / __/ __// _ | / /  / _ | __ / // __/  (c) 2013, Jonas Fonseca    **
**  __\ \/ /__/ __ |/ /__/ __ |/_// /_\ \                               **
** /____/\___/_/ |_/____/_/ | |__/ /____/                               **
**                          |/____/                                     **
\*                                                                      */

package org.scalajs.benchmark.tracer

import scala.scalajs.js.JSApp

object Main {

  def main(args: Array[String]): Unit = {
    println("Started tracer")
    for (i <- 0.until(5000)) {
      new RenderScene().renderScene(Tracer.config, null)
    }
    println("Done")
  }
}