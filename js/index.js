//轮播
lunbo();
function lunbo() {
    let index = 0;
    let times;
    zdlb();
    function zdlb() {
        let ul = document.getElementsByClassName("lunbo")[0];
        ul.style.transition = "all 1s";
        times = setInterval(function () {
            index--;
            ul.style.left = index * 1384 + "px";
            if (index < -3) {
                ul.style.transition = null;
                ul.style.left = 0;
                index = 0;
                setTimeout(function () {
                    ul.style.transition = "all 1s";
                }, 500);
            }
        }, 3000)
    }
    //左边按钮
    document.getElementsByClassName("btn_left")[0].onclick = function () {
        let ul = document.getElementsByClassName("lunbo")[0];
        clearInterval(times);
        index++;
        if (index > 0) {
            ul.style.transition = null;
            ul.style.left = 0;
            index = -3;
            setTimeout(function () {
                ul.style.transition = "all 1s";
            }, 500);
        }
        ul.style.left = index * 1384 + "px";
        zdlb();
    }
    //右边按钮
    document.getElementsByClassName("btn_right")[0].onclick = function () {
        let ul = document.getElementsByClassName("lunbo")[0];
        clearInterval(times);
        index--;
        if (index < -3) {
            ul.style.transition = "null";
            ul.style.left = 0;
            index = 0;
            setTimeout(function () {
                ul.style.transition = "all 1s";
            }, 500);
        }
        ul.style.left = index * 1384 + "px";
        zdlb();
    }



}


//悬浮时 图片添加动画
setTimeout(() => {
    animation("lunbo");
    animation("bgjx");
    animation("dgjxAll");
    animation("fxkwAll");
}, 500);

//放大镜
zoom();

//返回顶部
fhdb();

//倒计时
countDown();
function countDown() {
    let div = document.getElementsByClassName("count_dowm")[0];
    setInterval(function () {
        let endDate = new Date(2021, 4, 30, 23, 59, 59);
        let date = new Date();
        let num = endDate.getTime() - date.getTime();
        let day = Math.floor(num / 1000 / 60 / 60 / 24);
        let hour = Math.floor((num / 1000 / 60 / 60) % 24);
        let min = Math.floor((num / 1000 / 60) % 60);
        let sec = Math.floor((num / 1000) % 60);
        min < 10 ? min = "0" + min : min;
        sec < 10 ? sec = "0" + sec : sec;
        div.innerHTML = `申请时间剩余: ${day}天${hour}小时${min}分钟${sec}秒`
    }, 1000);
}

//立即申请
document.getElementsByClassName("ljsq")[0].onclick = function () {
    let s = Number((document.getElementsByClassName("person_count")[0].innerHTML).substr(0, 3));
    s++;
    document.getElementsByClassName("person_count")[0].innerHTML = `${s}人申请`;
}






