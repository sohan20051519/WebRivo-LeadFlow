
from playwright.sync_api import sync_playwright, expect
import time

def verify_disjoint_upload():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            page.wait_for_selector("text=Drop or Select CSV", timeout=10000)

            # Upload files
            page.set_input_files('input[type="file"]', ['disjoint1.csv', 'disjoint2.csv'])

            page.wait_for_selector("text=Queue (2)")
            page.click("text=Cloud Sync")

            # Updated expectation
            page.wait_for_selector("text=Datasets merged and synced to cloud database", timeout=20000)

            time.sleep(3)

            page.screenshot(path="disjoint_result.png")
            print("Screenshot taken.")

            content = page.content()

            # Check for headers
            if "A" in content and "B" in content and "C" in content and "D" in content:
                print("SUCCESS: Found all headers A, B, C, D")
            else:
                print("FAILURE: Missing headers")

            # Check for values
            if "1" in content and "2" in content:
                print("SUCCESS: Found row 1 values")

            if "3" in content and "4" in content:
                print("SUCCESS: Found row 2 values")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="disjoint_error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_disjoint_upload()
