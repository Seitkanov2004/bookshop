const menu = document.querySelector(".modal--btn")
menu.addEventListener("click",() => {
    document.querySelector("#modal").style.display = "block"
})

const menuClose = document.querySelector(".modal-none")
menuClose.addEventListener("click",() => {
    document.querySelector("#modal").style.display = "none"
})