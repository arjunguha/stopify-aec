var squidImageData = require("./kraken-imaging.data").squidImageData;
var sigma = 10; // radius
var kernel, kernelSize, kernelSum;

function buildKernel() {
   var ss = sigma * sigma;
   var factor = 2 * Math.PI * ss;
   kernel = [];
   kernel.push([]);
   var i = 0, j;

   do {
       var g = Math.exp(-(i * i) / (2 * ss)) / factor;
       if (g < 1e-3) break;
       kernel[0].push(g);
       ++i;
   } while (i < 7);

   kernelSize = i;
   for (j = 1; j < kernelSize; ++j) {
       kernel.push([]);
       for (i = 0; i < kernelSize; ++i) {
           var g = Math.exp(-(i * i + j * j) / (2 * ss)) / factor;
           kernel[j].push(g);
       }
   }
   kernelSum = 0;
   for (j = 1 - kernelSize; j < kernelSize; ++j) {
       for (i = 1 - kernelSize; i < kernelSize; ++i) {
           kernelSum += kernel[Math.abs(j)][Math.abs(i)];
       }
   }
}

buildKernel();

var width = 400, height = 267;
//print("i: " + i + "j: " + j);

function gaussianBlur() {
    for (var y = 0; y < height; ++y) {
	for (var x = 0; x < width; ++x) {
	    var r = 0, g = 0, b = 0, a = 0;
	    for (var j = 1 - kernelSize; j < kernelSize; ++j) {
		if (y + j < 0 || y + j >= height) continue;
		for (var i = 1 - kernelSize; i < kernelSize; ++i) {
		    if (x + i < 0 || x + i >= width) continue;
		    r += squidImageData[4 * ((y + j) * width + (x + i)) + 0] * kernel[Math.abs(j)][Math.abs(i)];
		    g += squidImageData[4 * ((y + j) * width + (x + i)) + 1] * kernel[Math.abs(j)][Math.abs(i)];
		    b += squidImageData[4 * ((y + j) * width + (x + i)) + 2] * kernel[Math.abs(j)][Math.abs(i)];
		    a += squidImageData[4 * ((y + j) * width + (x + i)) + 3] * kernel[Math.abs(j)][Math.abs(i)];
		}
	    }
	    squidImageData[4 * (y * width + x) + 0] = r / kernelSum;
	    squidImageData[4 * (y * width + x) + 1] = g / kernelSum;
	    squidImageData[4 * (y * width + x) + 2] = b / kernelSum;
	    squidImageData[4 * (y * width + x) + 3] = a / kernelSum;
	}
    }
    return squidImageData;
}
for (var ix = 0; ix < 10; ix++) {
    gaussianBlur();
}
