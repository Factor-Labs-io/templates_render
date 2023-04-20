export default function AnimateNouns() {
  const gifContainer = document.getElementById("gif-container");
  const searchInput = document.getElementById("search-input");
  const searchForm = document.getElementById("search-form");
  const gifLoader = document.getElementById("gif-loader");

  gifLoader.style.display = "none";

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value;

    let url = "";
    if (searchTerm) {
      url = `https://s3.us-east-1.wasabisys.com/nouns/images/static/${searchTerm}.gif`;
    } else {
      url = "https://s3.us-east-1.wasabisys.com/nouns/images/static/74.gif";
    }

    // Show the loader before the form is submitted
    gifLoader.style.display = "flex";
    gifContainer.innerHTML = "";

    // Wait for 1 seconds before showing the GIF
    setTimeout(() => {
      const img = document.createElement("img");
      img.onload = () => {
        gifContainer.appendChild(img);
        // Hide the loader again when the GIF is loaded
        gifLoader.style.display = "none";
      };
      img.onerror = () => {
        gifContainer.innerHTML =
          "Sorry, an error occurred while loading the GIF.";
        // Hide the loader again when an error occurs
        gifLoader.style.display = "none";
      };
      img.src = url;
      img.alt = searchTerm || "Default GIF";

      searchInput.value = "";
    }, 1000);
  });
}
