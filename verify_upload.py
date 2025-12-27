
from playwright.sync_api import sync_playwright
import time
import os

def verify_upload():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the app
            page.goto("http://localhost:3000")

            # Wait for app to load
            page.wait_for_selector("text=Drop or Select CSV", timeout=10000)

            # Upload files
            # The input is hidden, so we need to make it visible or just use set_input_files on the locator
            # The locator is input[type="file"]
            page.set_input_files('input[type="file"]', ['test1.csv', 'test2.csv'])

            # Wait for queue to show up
            page.wait_for_selector("text=Queue (2)")

            # Click Cloud Sync
            page.click("text=Cloud Sync")

            # Wait for success message
            page.wait_for_selector("text=Dataset synced to cloud database", timeout=20000)

            # Wait a bit for the list to refresh
            time.sleep(3)

            # Take screenshot
            page.screenshot(path="upload_result.png")
            print("Screenshot taken.")

            # Verify the new dataset name exists
            # Expect "test1.csv + 1 files"
            expect_name = "test1.csv + 1 files"
            content = page.content()
            if expect_name in content:
                print(f"SUCCESS: Found dataset '{expect_name}'")
            else:
                print(f"FAILURE: Did not find dataset '{expect_name}'")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_upload()
