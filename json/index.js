bgjx();//报告精选
dgjx();//导购精选
fxkw();//发现酷玩
function bgjx() {
    let bgjx = document.getElementsByClassName("bgjx")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/report/new");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 8; i++) {
                    bgjx.innerHTML +=
                        `<div>
                <img src=${obj[i].img}>
                <a href="#">${obj[i].text}</a>
                <p><span></span><span>${obj[i].uName}</span><span>${obj[i].totalnum}</span><span>${obj[i].num}</span></p>
                </div>`;
                }
            }
        }
    }
}

//导购精选
function dgjx() {
    let dgjx = document.getElementsByClassName("dgjxAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/guid/new");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 4; i++) {
                    dgjx.innerHTML +=
                        `<div>
                    <img src=${obj[i].img}>
                    <a href="#">${obj[i].text}</a>
                    <p><span>${obj[i].like}</span><span>${obj[i].words}</span></p>
                </div>`;
                }
            }
        }
    }
}

//发现酷玩
function fxkw() {
    let fxkw = document.getElementsByClassName("fxkwAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/play/new");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < 8; j++)
                        fxkw.innerHTML +=
                            `<div>
                            <img src=${obj[i][j].img}>
                            <a href="#">${obj[i][j].text}</a>
                            <br>
                            <a href="#">${obj[i][j].description}</a>
                            <p><span>${obj[i][j].price}</span><span>${obj[i][j].like}</span><span>${obj[i][j].words}</span></p>
                            <div/>
                            `;
                }
            }
        }
    }
}
