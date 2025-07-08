import React, { useState } from "react";
import products from "./products.json";

function findProductByCrop(input) {
  // Accepts "Tomato #124" or "Lettuce #99" etc.
  const cropName = input.split("#")[0].trim();
  return products.find((p) => p.crop.toLowerCase() === cropName.toLowerCase());
}

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = findProductByCrop(input);
    if (found) {
      setResult({
        crop: input,
        matchedProduct: found.matchedProduct,
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h2>Nori Farm Crop Matcher</h2>
      <input
        type="text"
        placeholder="Enter crop name or NFT ID (e.g., Tomato #124)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: 300, padding: 8, marginRight: 8 }}
      />
      <button onClick={handleSearch}>Match Product</button>
      <div style={{ marginTop: 32 }}>
        {result ? (
          <pre style={{ background: "#222", color: "#fff", padding: 16 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
        
        ) : (
          input && <div>No matching product found.</div>
        )}
      </div>
      {result && (
        <div style={{ marginTop: 24 }}>
          <h3>{result.matchedProduct.title}</h3>
          <img
            src={result.matchedProduct.image}
            alt={result.matchedProduct.title}
            width={200}
          />
          <div>
            <strong>Price:</strong> {result.matchedProduct.price}
          </div>
          <a href={result.matchedProduct.buyLink} target="_blank" rel="noopener noreferrer">
            Buy Now
          </a>
        </div>
      )}
    </div>
  );
}
