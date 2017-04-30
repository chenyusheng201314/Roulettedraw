/**
 * Created by Administrator on 2017/4/28.
 */
var sta=0;// 表示轮盘关闭
var j=5;//表示轮盘可转的次数
var x= null;//轮盘旋转角度
var m=null;//获取日期缓存
var j_=null;//次数缓存

// 点击后判断转盘是否开始旋转
$(".coin").on("click",function () {
    //判断次数缓存是否为空或未定义
    if($.cookie("times") =="" || $.cookie("times") == undefined){
        //为空则进行次数缓存赋值
        j_ = j;
        $.cookie("times",j_);
        cj();
    }else {
        //次数缓存不为空
        j = $.cookie("times");//读取缓存
        var  data_=new Date();//获取当前世界时间
        var m_= data_.getMonth();//获取当前月份
        //然后判断日期缓存是否为空或未定义
        if($.cookie("time") =="" || $.cookie("time") == undefined){
            //为空则进行日期缓存赋值
            m= m_;
            $.cookie("time",m);
            cj();
        }else {
            //日期缓存不为空
            m=$.cookie("time");//读取缓存
            //判断是否过去一个月
            if(m_ - m >=1){
                //如果过去一个月对次数、日期缓存重新赋值
                j_=5;
                $.cookie("times",j_);
                m= m_;
                $.cookie("time",m);
                cj();
            }else {
                //如果没有过去一个月对次数缓存进行判断
                if(j>0){
                    cj()
                }else {
                    $(".coin img").attr("src","images/Pointer2.png");
                    $(".cj").html("0")
                    alert("您本月次数已用完，请下月再来！")
                }
            }
        }
    }
});

//点击弹窗收回
$(".true , .x").on("click",function () {
    $(".cover").fadeOut()
    $(".dan").animate({"top":"-490"},500)
});

//当轮盘转到一定角度时，弹出弹窗告知奖品
function gitfun(a,b,name) {
    if(a<x - 360 && x - 360<b){
        $(".pic img").attr("src",name);
        $(".cover").fadeIn();
        $(".dan").animate({"top":"50"},500)
    }
}

//转盘转动
function cj() {

    //读取次数缓存
    j=$.cookie("times");

    //每次点击重新赋值
    x = parseInt((Math.floor(Math.random()*360)+360));
    var i=0;

    //状态判断
    if(sta==0){

        //判断次数并赋值
        if(j>0){
            j--;
            $(".cj").html(j)
            j_ = j;
            $.cookie("times",j_);
        }

        //控制轮盘速度,旋转结束后进行奖品判断
        var set = setInterval(function () {
            sta=1;
            if(i<x ){
                i+= 3;
                $(".circle").css({"transform":"rotate3d(0,0,1,"+ i +"deg)"})
                sta=1
            }else {

                //剩余次数为0，则不可点击并替换图片
                if(j==0){
                    $(".coin img").attr("src","images/Pointer2.png");
                }
                //清除计时器并重置状态
                clearInterval(set);
                sta=0;

                //判断奖品，并弹出弹窗
                if(337.5<x - 360 || x - 360<22.5){
                    console.log(1);
                    $(".pic img").attr("src","images/001.png");
                    $(".cover").fadeIn();
                    $(".dan").animate({"top":"15%"},500)
                }
                gitfun(157.5,202.5,"images/001.png");
                gitfun(202.5,247.5,"images/002.png");
                gitfun(22.5,67.5,"images/002.png");
                gitfun(247.5,292.5,"images/003.png");
                gitfun(67.5,142.5,"images/003.png");
                gitfun(112.5,157.5,"images/004.png");
                gitfun(292.5,337.5,"images/004.png");
            }
        })
    }
}