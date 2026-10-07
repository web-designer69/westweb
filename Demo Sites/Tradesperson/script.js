const westwebReturn = document.getElementById("westwebReturn");

setTimeout(() => {
    if (westwebReturn) {
        westwebReturn.classList.add("show");
    }
}, 3000);

if (westwebReturn) {
    westwebReturn.addEventListener("click", () => {
        alert("TRADESPERSON BUTTON WORKS");
    });
}
