const westwebReturn = document.getElementById("westwebReturn");

setTimeout(() => {
    westwebReturn.classList.add("show");
}, 3000);

westwebReturn.addEventListener("click", () => {
    window.location.href = "index.html";
});
