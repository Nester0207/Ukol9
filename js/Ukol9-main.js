function zmenBarvu () {
    let cervena = Math.floor(Math.random() * 256);
    let zelena = Math.floor(Math.random() * 256);
    let modra = Math.floor(Math.random() * 256);
    let body = document.querySelectorAll("body")[0];
    body.style.backgroundColor = "rgb(" + cervena + "," + zelena + "," + modra + ")";
    } 

