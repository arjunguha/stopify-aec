enablePlugins(ScalaJSPlugin)

scalaVersion in ThisBuild := "2.12.1"
name := "MyScalaProgram"



lazy val root = crossProject.in(file(".")).settings(
    unmanagedSourceDirectories in Compile += baseDirectory.value / "shared" / "src" / "main" / "scala")
    .jsSettings(
       scalaJSUseMainModuleInitializer := true)


lazy val js = root.js
lazy val jvm = root.jvm
