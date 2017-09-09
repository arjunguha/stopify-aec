### Dependencies
1. Install [R](https://www.r-project.org/)
2. Run the following commands through the R repl:
   ```r
   install.packages(c("sitools", "scales", "extrafont", "fontcm", "tidyverse", "stringr"))
   ```
3. Install computer modern fonts and register your fonts
   ```
   library(extrafont)
   font_install('fontcm')
   font_import()
   fonts()
   ```
   the final line should output all registered fonts.
4. Plot the data using `./plot.r <file1> <file2> ...`
  