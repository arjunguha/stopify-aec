include image

#|
   
   Note that this program is written entirely in direct style – there are no callbacks
   or special control operators used when loading the two pictures from the Web.
   
   Pyret uses Stopify's functionality to pause the program and restart with the image
   value once it is loaded.
   
|#

philly = image-url("https://pldi18.sigplan.org/getImage/carousel/1280px-Philadelphia_skyline_from_the_southwest_2015.jpg")

sigplan = image-url("https://cdn-images-1.medium.com/max/1200/1*sPYiDG2aF9TrfmlEVhE1Aw.png")

pldi = text("PLDI '18", 32, "purple")

philly-scaled = scale(0.4, philly)

put-image(pldi, 400, 150, put-image(scale(0.1, sigplan), 250, 150, philly-scaled))
