function zmenBarvu () {
    let cervena = Math.floor(Math.random() * 256);
    let zelena = Math.floor(Math.random() * 256);
    let modra = Math.floor(Math.random() * 256);
    let body = document.querySelectorAll("body")[0];
    body.style.backgroundColor = "rgb(" + cervena + "," + zelena + "," + modra + ")";
    } 

let spustiBarvu = document.querySelectorAll("#button")[0];
let zastavBarvu = document.querySelectorAll("#button")[1];

spustiBarvu.addEventListener("click", () => {
    let cas = setInterval(() => {
        zmenBarvu();
    }, 3000);

    zastavBarvu.addEventListener("click", () => {
        clearInterval(cas);
    })
});