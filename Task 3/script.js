const productList = document.getElementById("productList");
const error = document.getElementById("error");

async function loadAllProducts() {
  error.textContent = "";
  productList.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    displayProducts(data);
  } catch (err) {
    productList.innerHTML = "<p>Failed to load products.</p>";
  }
}

async function searchProducts() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    error.textContent = "Please enter a valid search term.";
    return;
  }

  error.textContent = "";
  productList.innerHTML = "<p>Searching...</p>";

  try {
    const response = await fetch(`https://dummyjson.com/products/search?g=${query}`);
    const data = await response.json();

    if (!data.length) {
      productList.innerHTML = "<p>No results found.</p>";
    } else {
      displayProducts(data);
    }
  } catch (err) {
    productList.innerHTML = "<p>Search failed.</p>";
  }
}

function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image || 'https://via.placeholder.com/80'}" alt="${p.title}" />
      <div>
        <h3>${p.name || 'Unnamed Product'}</h3>
        <p><strong>Title:</strong> ${p.title || 'No title'}</p>
        <p><strong>Price:</strong> $${p.price || 'N/A'}</p>
      </div>
    `;
    productList.appendChild(div);
  });
}
