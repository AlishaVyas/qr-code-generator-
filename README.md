# qr-code-generator-
Node.js practice project 

---

# QR Code Generator

This is a basic Node.js project that generates a QR code from a user-provided URL and saves it as an image file. Additionally, the URL is saved in a text file for reference.

## Features
- Prompts the user to input a URL using the `inquirer` package.
- Converts the URL into a QR code using the `qr-image` package.
- Saves the QR code as an image file (`qr-image.png`).
- Writes the entered URL to a text file (`message.txt`).

## Tech Stack
- **Node.js**: Runtime environment.
- **Inquirer**: For user input.
- **qr-image**: To generate QR codes.
- **fs**: Native Node.js module for file operations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application:
   ```bash
   node index.js
   ```

2. Enter the URL when prompted.

3. The QR code image (`qr-image.png`) and the text file (`message.txt`) will be created in the project directory.

## Example Output
- **QR Code Image**: A `qr-image.png` file in the root directory.
- **URL Text File**: A `message.txt` file containing the entered URL.

## Requirements
- Node.js installed on your system.
- NPM for managing dependencies.

---
