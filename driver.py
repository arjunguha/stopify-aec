from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pyvirtualdisplay import Display
import sys
import os

# Arg 1 to script is the html file that needs to be run.
# Arg 2 is the log to which the data is written.

if len(sys.argv) < 3:
    raise Exception('Not enough arguments')

filename = sys.argv[1]
loc = os.getcwd()
html_file = "file://" + os.path.join(loc, filename)

display = Display(visible=0, size=(800, 600))
display.start()

# Create a new instance of the Firefox driver
driver = webdriver.Firefox()

try:

    # go to the google home page
    driver.get(html_file)

    # Runner signals completion or failure by changing title to done
    WebDriverWait(driver, 300).until(EC.title_contains("done"))

    # You should see "cheese! - Google Search"
    data = driver.find_element_by_id('data').get_attribute('innerHTML')

    # write data to log file
    file = open(sys.argv[2], 'a')
    print data
    file.write(data + "\n")


finally:
    driver.quit()
    display.sendstop()
    file.close()
