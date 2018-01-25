var bg = chrome.extension.getBackgroundPage();//获取background页面,popup与background通信
if(bg){
    function enterName() {
        bg.userName = $("#userName").val()
    }
} 
