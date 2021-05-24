//图片动画
function animation(class_Name) {
    let div = document.getElementsByClassName(class_Name)[0];
    let img = div.querySelectorAll("img");
    img.forEach(function (item) {
        item.parentElement.addEventListener("mouseover", function () {
            item.style.animation = "imgtd .5s linear infinite alternate";
        })
        item.parentElement.addEventListener("mouseout", function () {
            item.style.animation = null;
        })
    });
}

//放大镜
function zoom() {
    let div = document.getElementsByClassName("seek")[0];
    div.addEventListener("mouseover", function () {
        this.children[0].style.transform = "scale(1.3)";

    })
    div.addEventListener("mouseout", function () {
        this.children[0].style.transform = "scale(1)";

    })
}


//返回顶部
function fhdb() {
    let div = document.getElementsByClassName("fhdb")[0];
    window.onscroll = function () {
        let top = document.documentElement.scrollTop;
        if (top > 100) {
            div.style.display = "block";
        } else {
            div.style.display = "none"
        }
    }

    div.onclick = function () {
        let times = setInterval(function () {
            let top = document.documentElement.scrollTop -= 10;
            if (top == 0) clearInterval(times);
        }, 1);
    }
}