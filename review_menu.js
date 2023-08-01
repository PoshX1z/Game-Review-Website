
const searchBar = document.querySelector(".search-bar");
const containers = document.querySelectorAll(".col-md-4")

const searchTitle = () => {
    let value = searchBar.value.toLowerCase();

    containers.forEach(container => {
        let titleName = container.querySelector("a").textContent.toLowerCase();

        if(titleName.includes(value)){
            container.style.display = "";

        }else{
            container.style.display = "none";

        }
    })
}

searchBar.addEventListener("input", () => searchTitle());
