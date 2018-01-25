var userName = "13545675856";//用户

var tabs_id;//定义id

//获取消息接收id
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo,tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabs_id = tabs[0].id;
    });
})

//每5秒获取一次数据
setInterval(function(){
    if(userName === ""){
        return;
    }
    var url = "http://127.0.0.1/obscq/app/wx/getTest.html?userName=" + userName;
    httpRequest("js/json_data.json",function (json) {
        console.log(json);
        chrome.tabs.sendMessage(tabs_id,json, function(response) {
            console.log(response.state);
        });
    })
}, 5000)

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // JSON解析器不会执行攻击者设计的脚本.
            var resp = JSON.parse(xhr.responseText);
            callback(resp);
        }
    };
    xhr.send();
}