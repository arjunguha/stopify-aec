# Install all required dependencies to run the stopify benchmarking harness.

.PHONY: all clean
all: bin bin/chromedriver bin/geckodriver

bin:
	mkdir -p bin

bin/chromedriver: | bin
	wget 'http://chromedriver.storage.googleapis.com/2.30/chromedriver_linux64.zip'
	unzip chromedriver_linux64.zip
	mv chromedriver bin/
	rm chromedriver_linux64.zip

bin/geckodriver: | bin
	wget 'https://github.com/mozilla/geckodriver/releases/download/v0.18.0/geckodriver-v0.18.0-linux64.tar.gz'
	tar xvf ./geckodriver-v0.18.0-linux64.tar.gz
	mv geckodriver bin/
	rm ./geckodriver-v0.18.0-linux64.tar.gz

clean:
	rm -rf bin
