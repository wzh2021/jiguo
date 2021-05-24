var new_ = document.getElementsByTagName('nav')[0].children[1];
var hot_ = document.getElementsByTagName('nav')[0].children[2];
// 页面加载完毕后給最新渲染数据
window.onload=function(){
    hot_.style.color='black';
    var ajax = new XMLHttpRequest() || ActiveXObject();
    ajax.open('get','http://1.15.132.9:3000/useing/public',true);
    ajax.send();
    ajax.onreadystatechange =function(){
        if(ajax.readyState===4){
            if(ajax.status==200){
                // 获取数据
                var data = JSON.parse(ajax.responseText);
                console.log(data);
                // 5.调用方式  找到模板 把数据传进去
                var tmpText = doT.template(document.getElementById('dot').innerHTML);
                //doT.template() 调用模板引擎的方法
                document.getElementById('ul').innerHTML = tmpText(data); 
            }
        }
    }
}
// 点击最热渲染数据
hot_.onclick=function(){
    new_.style.color='black';
    hot_.style.color='#FF6347'
    new_.style.borderBottom='0';
    hot_.style.borderBottom='5px solid tomato';
    var ajax = new XMLHttpRequest() || ActiveXObject();
    ajax.open('get','http://1.15.132.9:3000/report/hot',true);
    ajax.send();
    ajax.onreadystatechange =function(){
        if(ajax.readyState===4){
            if(ajax.status==200){
                // 获取数据
                var data = JSON.parse(ajax.responseText);
                console.log(data);
                // 5.调用方式  找到模板 把数据传进去
                var tmpText = doT.template(document.getElementById('dot').innerHTML);
                //doT.template() 调用模板引擎的方法
                document.getElementById('ul').innerHTML = tmpText(data); 
            }
        }
    }
}
// 点击最新渲染数据
new_.onclick=function(){
    hot_.style.color='black';
    new_.style.color='#FF6347'
    hot_.style.borderBottom='0';
    new_.style.borderBottom='5px solid tomato';
    var ajax = new XMLHttpRequest() || ActiveXObject();
    ajax.open('get','http://1.15.132.9:3000/useing/public',true);
    ajax.send();
    ajax.onreadystatechange =function(){
        if(ajax.readyState===4){
            if(ajax.status==200){
                // 获取数据
                var data = JSON.parse(ajax.responseText);
                console.log(data);
                // 5.调用方式  找到模板 把数据传进去
                var tmpText = doT.template(document.getElementById('dot').innerHTML);
                //doT.template() 调用模板引擎的方法
                document.getElementById('ul').innerHTML = tmpText(data); 
            }
        }
    }
}
// 注册极果
var btn = document.getElementsByTagName('button')[0];
console.log(btn);
btn.onclick=function(){
    window.open('./16zcyz.html')
}