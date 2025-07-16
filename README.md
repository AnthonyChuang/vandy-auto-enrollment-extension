# vandy-auto-enrollment-extension

# vandy-auto-enrollment-extension

A Chrome Extension that automatically selects "Waitlist If Full" for all available class dropdowns during enrollment on Vanderbilt University's YES (Your Enrollment Services) portal.

## Features

- Automatically selects the "Waitlist If Full" option in class enrollment dropdowns.
- Works on page load or manually via popup button.
- Uses MutationObserver to detect dropdown availability.
- Minimal user interaction required.

## How to Use

### 1. Clone the Repository
   ```bash
   git clone https://github.com/AnthonyChuang/vandy-auto-enrollment-extension.git
   cd vandy-auto-enrollment-extension 
   ```

### 2. Load Extension into Chrome
Open chrome://extensions/ in your browser.

Enable Developer mode (toggle at top right).

Click Load unpacked.

Select the project directory.

### 3. Use It
Go to the YES enrollment page (e.g. https://more.app.vanderbilt.edu/...).

The extension will automatically attempt to select "Waitlist If Full".

If it doesn't, click the extension icon and press the "Trigger Auto-Select" button.

## Development Notes
Uses plain JavaScript with MutationObserver and MouseEvent for DOM interactions.

All logs can be viewed in the browser console for debugging.

Designed to be minimally invasive and easy to extend.


