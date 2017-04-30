$(".left").on("click",function () {
    $(".left img").attr("src","images/hdrk-but3.png");
    $(".right img").attr("src","images/hdrk-but4.png");
});
$(".right").on("click",function () {
    $(".left img").attr("src","images/hdrk-but3.png");
    $(".right img").attr("src","images/hdrk-but4.png");
    location.href = "抽奖.html"
});