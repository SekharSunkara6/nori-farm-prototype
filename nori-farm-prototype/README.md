# Nori Farm Crop-to-Product Mapping Prototype

## Overview

This project is a **proof-of-concept integration** for XrisP’s Nori Farm platform. It demonstrates how a virtual crop (grown or harvested as an NFT/digital asset on Nori Farm) can be mapped to a corresponding real-world product from an online shopping mall or product database.

**Key Features:**
- Accepts a crop name or NFT ID as input (e.g., `Tomato #124`)
- Matches the input to a real product using a mock product database (JSON)
- Displays the matched product information as JSON and a simple product card

## Tech Stack

- [React](https://react.dev/) (Vite template)
- Mock product data (local JSON file)
- JavaScript (ES6+)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SekharSunkara6/nori-farm-prototype.git
   cd nori-farm-prototype
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

## Usage

1. Enter a crop name or NFT ID (e.g., `Tomato #124`) in the input field.
2. Click the **Match Product** button.
3. The app will display:
   - The matched product as formatted JSON
   - A simple product card with title, image, price, and a "Buy Now" link

## Example Output

```json
{
  "crop": "Tomato #124",
  "matchedProduct": {
    "title": "Fresh Organic Tomato Box",
    "price": "19,000 KRW",
    "image": "https://your-mockshop.com/images/tomato.jpg",
    "buyLink": "https://your-mockshop.com/product/123"
  }
}
```

## AI Tool Usage

This project utilized AI-assisted development tools for scaffolding and code generation.  
**Example prompt used with GPT-4:**
> "Write a React component that takes a crop name or NFT ID as input, matches it to a product in a local JSON file, and displays the result as JSON and a simple card."

**AI-generated output:**  
- The initial React component structure for input handling and product matching
- Suggestions for styling and JSON display

**Modifications:**  
- Adapted the component for local JSON import
- Added error handling and UI polish

## Customization
- To add or update product mappings, edit `src/products.json`.
- For real API integration, replace the mock fetch logic in `App.jsx` with your preferred API call (e.g., fetch from Shopify or Cafe24).

## License
This project is for educational and prototyping purposes.
If you need to adjust the repository URL or add screenshots, update the relevant sections. Let me know if you want a version tailored for a specific deployment or with additional sections!
