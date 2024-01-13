const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const searchInput = document.querySelector("#searchInput")
const imagesDiv = document.querySelector("#imagesDiv")
const previousImgs = document.getElementsByClassName("searchResults")


searchButton.addEventListener("click", (e) => {
    const previousImgsLength = previousImgs.length
    for (i = 0; i < previousImgsLength; i++) { previousImgs[0].remove() }
    getImages(e)
})

clearButton.addEventListener("click", () => {
    const previousImgsLength2 = previousImgs.length
    for (i = 0; i < previousImgsLength; i++) { previousImgs[0].remove() }
})

function getImages(e) {
    const valueOfSearchInput = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${valueOfSearchInput}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID FBaeDEwBWs8FuUQelapQOJfv0uWnMLth7EO-qfm9q98"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            const results = Array.from(data.results)
            results.forEach(image => {
                let imageUrl = image.urls.small
                let createImage = document.createElement("img")
                imagesDiv.appendChild(createImage)
                createImage.classList.add("searchResults")
                createImage.src = imageUrl
            });
        })
        .catch((err) => console.log(err))
    e.preventDefault()
}


