function sortProducts() {
    var select = document.getElementById("sort");
    var option = select.options[select.selectedIndex].value;
    var productsContainer = document.getElementById("products-container");
    var products = Array.from(productsContainer.getElementsByClassName("product"));

    products.sort(function (a, b) {
        var aValue = a.dataset[option];
        var bValue = b.dataset[option];

        if (option === "default") {
            // Keep the default order (do not sort)
            return 0;
        } else if (option === "name") {
            // Sort alphabetically
            return aValue.localeCompare(bValue);
        } else {
            // Sort numerically
            return parseFloat(aValue) - parseFloat(bValue);
        }
    });

    // Clear existing products
    productsContainer.innerHTML = "";

    // Append sorted products
    products.forEach(function (product) {
        productsContainer.appendChild(product);
    });
}