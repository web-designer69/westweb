const westwebReturn = document.getElementById("westwebReturn");

setTimeout(() => {
    if (westwebReturn) {
        westwebReturn.classList.add("show");
    }
}, 3000);

if (westwebReturn) {
    westwebReturn.addEventListener("click", () => {
        window.top.location.href = "https://web-designer69.github.io/westweb/index.html";
    });
}
