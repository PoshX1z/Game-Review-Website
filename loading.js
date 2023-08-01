const loader = document.querySelector(".wrapper");
const flexContainer = document.querySelector(".flex-container")
const container = document.querySelector(".container")

setTimeout(() =>{
    loader.classList.add("disabled"),
    flexContainer.classList.remove("disabled")
}, 1500)