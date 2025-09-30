const products = [
  { name: "Laptop", category: "electronics", price: 800 },
  { name: "Smartphone", category: "electronics", price: 500 },
  { name: "T-Shirt", category: "clothing", price: 20 },
  { name: "Jeans", category: "clothing", price: 40 },
  { name: "Novel", category: "books", price: 15 },
  { name: "Textbook", category: "books", price: 60 }
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

// Display products
function displayProducts(items) {
  productGrid.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
    `;
    productGrid.appendChild(div);
  });
}

// Filter & Sort
function updateDisplay() {
  let filtered = [...products];

  // Filter by category
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Sorting
  const sort = sortOption.value;
  if (sort === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", updateDisplay);
sortOption.addEventListener("change", updateDisplay);

// Initial display
displayProducts(products);
