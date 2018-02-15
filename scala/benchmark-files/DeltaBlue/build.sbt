enablePlugins(ScalaJSPlugin)

scalaVersion in ThisBuild := "2.12.2"
name in ThisBuild := "deltablue"
version in ThisBuild := "0.1-SNAPSHOT"

lazy val root = crossProject.in(file(".")).settings(
  unmanagedSourceDirectories in Compile +=
    baseDirectory.value / "shared" / "src" / "main" / "scala")
  .jvmSettings(
    assemblyOutputPath in assembly := file("./main.jar"))
  .jsSettings(
     scalaJSUseMainModuleInitializer := true,
     artifactPath in (Compile, fastOptJS) :=
       file("./main.js"))

lazy val js = root.js
lazy val jvm = root.jvm

compile <<= (compile in Compile)
  .dependsOn(assembly in Compile in jvm,
             fastOptJS in Compile in js)
