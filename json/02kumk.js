
kwzx(); //酷玩最新
function kwzx() {
    document.getElementsByClassName("kwpl")[0].style.display = "none";
    document.getElementsByClassName("fxkwAll")[0].style.display = "block";
    let kwzx = document.getElementsByClassName("fxkwAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/play/new");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                kwzx.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < obj[i].length; j++) {
                        kwzx.innerHTML +=
                            `<div>
                    <img src="${obj[i][j].img}" alt="">
                    <a href="#">${obj[i][j].text}</a>
                    <br>
                    <a href="#">${obj[i][j].description}</a>
                    <p>
                        <span>${obj[i][j].price}</span>
                        <span>${obj[i][j].like}</span>
                        <span>${obj[i][j].words}</span>
                    </p>
                </div>`;
                    }
                }
            }
        }
    }
}

//酷玩最热
function kwzr() {
    document.getElementsByClassName("kwpl")[0].style.display = "none";
    document.getElementsByClassName("fxkwAll")[0].style.display = "block";
    let kwzr = document.getElementsByClassName("fxkwAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/play/hot");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.status);
            if (xhr.status == 200) {
                kwzr.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 2; i < 4; i++) {
                    for (let j = 0; j < obj[i].length; j++) {
                        kwzr.innerHTML +=
                            `<div>
                    <img src="${obj[i][j].img}" alt="">
                    <a href="#">${obj[i][j].text}</a>
                    <br>
                    <a href="#">${obj[i][j].description}</a>
                    <p>
                        <span>${obj[i][j].price}</span>
                        <span>${obj[i][j].like}</span>
                        <span>${obj[i][j].words}</span>
                    </p>
                </div>`;
                    }
                }
            }
        }
    }
}
//酷玩品类
function kwpl() {
    document.getElementsByClassName("kwpl")[0].style.display = "block";
    document.getElementsByClassName("fxkwAll")[0].style.display = "none";
}