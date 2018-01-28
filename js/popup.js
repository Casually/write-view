var bg = chrome.extension.getBackgroundPage();//获取background页面,popup与background通信
var name = bg.userName;
if(bg){
    $("#enterName").click(function () {
        if($("#enterName").html() === "开始"){
            $("#enterName").html("变更帐号");
            bg.userName = $("#userName").val();
            $("#userName").attr("readonly",true);
        }else{
            $("#userName").attr("readonly",false);
            $("#userName").focus();
            $("#enterName").html("开始");
        }
    })
}

$(function () {
    if(bg.userName != ""){
        $("#enterName").html("变更帐号");
        $("#userName").val(bg.userName);
        $("#userName").attr("readonly",true);
    }
})
