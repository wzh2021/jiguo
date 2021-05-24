var ipt1 = document.getElementsByTagName('input')[0];
var ipt2 = document.getElementsByTagName('input')[1];
var btn1 = document.getElementsByTagName('button')[1];
var ipt3 = document.getElementsByTagName('input')[3];
var ipt4 = document.getElementsByTagName('input')[4];
var ipt5 = document.getElementsByTagName('input')[5];
var submit = document.getElementsByTagName('button')[2];
var reg =/^[1][3-9]{1}[0-9]{9}$/ //手机号正则
var reg2 =/^a[d]{1}[m]{1}[i]{1}n$/ //用户名正则
var reg3 = /^1[2]{1}[3]{1}[4]{1}[5]{1}6$/ //密码正则        
var x=60;
var time;
btn1.onclick=function(){
    if(reg.test(ipt1.value)==false){
        alert('手机号码填写错误,验证码获取失败')
    }
    else{
   btn1.disabled='disabled';
   time=setInterval(function(){
        x--;
        btn1.innerHTML=x+'秒后重新获取';
        if(x<0){
            clearInterval(time);
            btn1.disabled='';
            x=60;
            btn1.innerHTML='点击重新获取'  
        }
    },1000)
}
}

ipt5.onblur=function(){
    
}
submit.onclick=function(){
    if(ipt1.value==''){
        alert('手机号码不能为空')
    }
    else if(reg.test(ipt1.value)==false){
        alert('请输入正确的手机号码');
        ipt1.value='';
    }
    else if(ipt2.value==''){
                alert('图片校验码不能为空')
            }
    else if(ipt2.value !='r2B7'){
        alert('图片检验码输入错误');
        ipt2.value='';
    }
    else if(ipt3.value==''){
                alert('用户名不能为空')
            }
    else if(reg2.test(ipt3.value)==false){
                alert('用户名必须为admin');
                ipt3.value='';
            }
    else if(ipt4.value==''){
         alert('密码不能为空')
                    }
    else if(reg3.test(ipt4.value)==false){
                        alert('密码必须是123456');
                        ipt4.value='';
                    }
    else if(ipt5.value==''){
                        alert('确认密码不能为空')
                    }
    else if(ipt4.value != ipt5.value){
                        alert('两次密码输入不一致');
                        ipt5.value='';
                    }
    else{
        alert('注册成功,请牢记用户名和密码！')
    }
}