let title = document.createElement("title")
const page = new URLSearchParams(window.location.search).get("p")

title.textContent = "Sky High Studios - " + page
document.head.appendChild(title)

let md = document.querySelector(".md")
md.src = "pages/" + page + ".md"