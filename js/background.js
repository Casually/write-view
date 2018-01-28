var userName = "";//用户

var tabs_id;//定义id

var ifamre_url = "";

var json_count;

//获取消息接收id
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        tabs_id = tabs[0].id;
        chrome.tabs.sendMessage(tabs_id, {
            "state": "init",
            "info": [
                "http://www.555456.com",
                "https://0005566.com",
                "https://b8800.com",
                "https://mm987.com",
                "https://www.b2233.com"
            ]
        }, function (response) {
            console.log(response.state);
        });
    });
})


var json_s = 0;

//每5秒获取一次数据
setInterval(function () {
    if (userName === "") {
        return;
    }

    var url = "http://localhost/chajian/getjson?userName=" + userName;
    //var url = "http://www.otonight.com/hgtz/getjson?userName=" + userName;线上
    /*url = "js/json_data"+ json_s +".json";*/
    httpRequest(url, function (json) {
        console.log(json);
        if (is_null(json)) {
            return;
        }
        json_count = json;
        chrome.tabs.sendMessage(tabs_id, {"state": "data_json", "info": json}, function (response) {
            console.log(response.state);
        });
        json_s++;
        if (json_s === 3) {
            json_s = 0;
        }
    })
}, 3000)

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // JSON解析器不会执行攻击者设计的脚本.
            var resp;
            if (is_null(xhr.responseText)) {
                resp = null;
            } else {
                resp = JSON.parse(xhr.responseText);
            }
            callback(resp);
        }
    };
    xhr.send();
}

function is_null(e) {
    if (e === null || e === "" || e === undefined || e === "undefined") {
        return true;
    }
    return false;
}

// 监听消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request)
    console.log(ifamre_url)
    var r;
    if (is_null(request.ifamre_url)) {
        r = {"state": "no"};
    } else {
        if (is_null(ifamre_url)) {
            ifamre_url = request.ifamre_url;
            r = {"state": "no"};
        } else {
            if (request.stype === "ifamre_url") {
                if (request.ifamre_url != ifamre_url) {
                    ifamre_url = request.ifamre_url
                    r = JSON.stringify(json_count);//做出回应
                } else {
                    r = {"state": "no"};
                }
            } else {
                r = {"state": "no"};
            }
        }
    }

    sendResponse(r);
});