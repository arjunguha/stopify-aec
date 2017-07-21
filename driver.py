from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pyvirtualdisplay import Display
import sys
import os

filename = sys.argv[1]
loc = os.getcwd()
html_file = "file://" + os.path.join(loc, filename)

display = Display(visible=0, size=(800, 600))
display.start()

try:
    # Create a new instance of the Firefox driver
    driver = webdriver.Firefox()

    # go to the google home page
    driver.get(html_file)

    # Runner signals completion or failure by changing title to done
    WebDriverWait(driver, 100).until(EC.title_contains("done"))

    # You should see "cheese! - Google Search"
    data = driver.find_element_by_id('data').get_attribute('innerHTML')

    print data

finally:
    driver.quit()
