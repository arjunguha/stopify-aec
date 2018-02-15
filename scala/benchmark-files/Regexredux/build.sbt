enablePlugins(ScalaJSPlugin)
scalaVersion in ThisBuild := "2.12.1"
lazy val root = crossProject.in(file(".")).settings(
    unmanagedSourceDirectories in Compile += baseDirectory.value / "shared" / "src" / "main" / "scala")
    .jvmSettings(
       assemblyJarName in assembly := "main.jar")
    .jsSettings(
       scalaJSUseMainModuleInitializer := true)
lazy val js = root.js
lazy val jvm = root.jvm
val compileAll = TaskKey[Unit]("compileAll") 
compileAll :=  { }
compileAll := compileAll.dependsOn(fastOptJS in Compile in js, assembly in Compile in jvm).value