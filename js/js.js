var urlArray = new Array();
var is_write_url = false;
var count_json;
var ifamre_url = "";
//接收消息
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (!is_write_url) {
            if (request.state === "init") {
                console.log(is_write_url)
                urlArray = request.info;
                is_write_url = IsWriteUrl();
                console.log(is_write_url)
            }
        } else {
            if (request.state === "data_json") {
                //write_data(request.info);//本地json文件
                count_json = JSON.parse(request.info);
                write_data(count_json)//服务获取可能需要转换
                ifamre_url = $("#frame").attr("src");
            }
        }
        sendResponse({"state": "ok", "ifamre_url": ifamre_url});
    }
);

setInterval(function (e) {
    var laserExtensionId = "ipenifliabelpinfphhcpeheflcphnmk";
    //var laserExtensionId = "fhlchpacogdldheopkokimnbiibaipcd";打包后的
    chrome.runtime.sendMessage(laserExtensionId,
        {"ifamre_url": $("#frame").attr("src"), "stype": "ifamre_url"},
        function (response) {
            if (response.state == "no") {
                return;
            } else {
                document.getElementById("frame").onload = function (ev) {
                    setTimeout(function () {
                        count_json = JSON.parse(response);
                        write_data(count_json)
                    }, 2000);

                }
            }
        }
    );
}, 10000);


var DX1_D = document.getElementsByName("DX1_D")[0];
var DX1_X = document.getElementsByName("DX1_X")[0];
var DS1_D = document.getElementsByName("DS1_D")[0];
var DS1_S = document.getElementsByName("DS1_S")[0];
var LH1_L = document.getElementsByName("LH1_L")[0];
var LH1_H = document.getElementsByName("LH1_H")[0];

var DX2_D = document.getElementsByName("DX2_D")[0];
var DX2_X = document.getElementsByName("DX2_X")[0];
var DS2_D = document.getElementsByName("DS2_D")[0];
var DS2_S = document.getElementsByName("DS2_S")[0];
var LH2_L = document.getElementsByName("LH2_L")[0];
var LH2_H = document.getElementsByName("LH2_H")[0];

var DX3_D = document.getElementsByName("DX3_D")[0];
var DX3_X = document.getElementsByName("DX3_X")[0];
var DS3_D = document.getElementsByName("DS3_D")[0];
var DS3_S = document.getElementsByName("DS3_S")[0];
var LH3_L = document.getElementsByName("LH3_L")[0];
var LH3_H = document.getElementsByName("LH3_H")[0];

var DX4_D = document.getElementsByName("DX4_D")[0];
var DX4_X = document.getElementsByName("DX4_X")[0];
var DS4_D = document.getElementsByName("DS4_D")[0];
var DS4_S = document.getElementsByName("DS4_S")[0];
var LH4_L = document.getElementsByName("LH4_L")[0];
var LH4_H = document.getElementsByName("LH4_H")[0];

var DX5_D = document.getElementsByName("DX5_D")[0];
var DX5_X = document.getElementsByName("DX5_X")[0];
var DS5_D = document.getElementsByName("DS5_D")[0];
var DS5_S = document.getElementsByName("DS5_S")[0];
var LH5_L = document.getElementsByName("LH5_L")[0];
var LH5_H = document.getElementsByName("LH5_H")[0];

var DX6_D = document.getElementsByName("DX6_D")[0];
var DX6_X = document.getElementsByName("DX6_X")[0];
var DS6_D = document.getElementsByName("DS6_D")[0];
var DS6_S = document.getElementsByName("DS6_S")[0];
var LH6_L = document.getElementsByName("LH6_L")[0];
var LH6_H = document.getElementsByName("LH6_H")[0];

var DX7_D = document.getElementsByName("DX7_D")[0];
var DX7_X = document.getElementsByName("DX7_X")[0];
var DS7_D = document.getElementsByName("DS7_D")[0];
var DS7_S = document.getElementsByName("DS7_S")[0];
var LH7_L = document.getElementsByName("LH7_L")[0];
var LH7_H = document.getElementsByName("LH7_H")[0];

var DX8_D = document.getElementsByName("DX8_D")[0];
var DX8_X = document.getElementsByName("DX8_X")[0];
var DS8_D = document.getElementsByName("DS8_D")[0];
var DS8_S = document.getElementsByName("DS8_S")[0];
var LH8_L = document.getElementsByName("LH8_L")[0];
var LH8_H = document.getElementsByName("LH8_H")[0];

var DX9_D = document.getElementsByName("DX9_D")[0];
var DX9_X = document.getElementsByName("DX9_X")[0];
var DS9_D = document.getElementsByName("DS9_D")[0];
var DS9_S = document.getElementsByName("DS9_S")[0];
var LH9_L = document.getElementsByName("LH9_L")[0];
var LH9_H = document.getElementsByName("LH9_H")[0];

var DX10_D = document.getElementsByName("DX10_D")[0];
var DX10_X = document.getElementsByName("DX10_X")[0];
var DS10_D = document.getElementsByName("DS10_D")[0];
var DS10_S = document.getElementsByName("DS10_S")[0];
var LH10_L = document.getElementsByName("LH10_L")[0];
var LH10_H = document.getElementsByName("LH10_H")[0];

function write_data(json_data) {
    init_node_data();
    var jd;
    try {
        jd = JSON.parse(json_data);
    } catch (e) {
        jd = json_data;
        console.log(e)
    }
    console.log(jd.daxiao)
    clear_write_data();
    clear_B();

    var daxiao = jd.daxiao;
    var danshaung = jd.danshuang;
    var longhu = jd.longhu;
    for (var i = 0; i < daxiao.length; i++) {
        write_data_info(i, daxiao[i]);
    }
    for (var i = 0; i < danshaung.length; i++) {
        write_data_info(i, danshaung[i]);
    }
    for (var i = 0; i < longhu.length; i++) {
        write_data_info(i, longhu[i]);
    }
    for (var i = 0; i < longhu.length; i++) {
        write_b(i, longhu[i]);
    }


}

function write_data_info(size, json) {
    switch (size) {
        case 0:
            if (json.type === "大") {
                if (DX1_D) {
                    DX1_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX1_X) {
                    DX1_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS1_D) {
                    DS1_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS1_S) {
                    DS1_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH1_L) {
                    LH1_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH1_H) {
                    LH1_H.value = json.money;
                }
            }
            break;
        case 1:
            if (json.type === "大") {
                if (DX2_D) {
                    DX2_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX2_X) {
                    DX2_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS2_D) {
                    DS2_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS2_S) {
                    DS2_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH2_L) {
                    LH2_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH2_H) {
                    LH2_H.value = json.money;
                }
            }
            break;
        case 2:
            if (json.type === "大") {
                if (DX3_D) {
                    DX3_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX3_X) {
                    DX3_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS3_D) {
                    DS3_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS3_S) {
                    DS3_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH3_L) {
                    LH3_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH3_H) {
                    LH3_H.value = json.money;
                }
            }
            break;
        case 3:
            if (json.type === "大") {
                if (DX4_D) {
                    DX4_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX4_X) {
                    DX4_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS4_D) {
                    DS4_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS4_S) {
                    DS4_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH4_L) {
                    LH4_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH4_H) {
                    LH4_H.value = json.money;
                }
            }
            break;
        case 4:
            if (json.type === "大") {
                if (DX5_D) {
                    DX5_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX5_X) {
                    DX5_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS5_D) {
                    DS5_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS5_S) {
                    DS5_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH5_L) {
                    LH5_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH5_H) {
                    LH5_H.value = json.money;
                }
            }
            break;
        case 5:
            if (json.type === "大") {
                if (DX6_D) {
                    DX6_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX6_X) {
                    DX6_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS6_D) {
                    DS6_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS6_S) {
                    DS6_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH6_L) {
                    LH6_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH6_H) {
                    LH6_H.value = json.money;
                }
            }
            break;
        case 6:
            if (json.type === "大") {
                if (DX7_D) {
                    DX7_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX7_X) {
                    DX7_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS7_D) {
                    DS7_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS7_S) {
                    DS7_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH7_L) {
                    LH7_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH7_H) {
                    LH7_H.value = json.money;
                }
            }
            break;
        case 7:
            if (json.type === "大") {
                if (DX8_D) {
                    DX8_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX8_X) {
                    DX8_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS8_D) {
                    DS8_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS8_S) {
                    DS8_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH8_L) {
                    LH8_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH8_H) {
                    LH8_H.value = json.money;
                }
            }
            break;
        case 8:
            if (json.type === "大") {
                if (DX9_D) {
                    DX1_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX9_X) {
                    DX9_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS9_D) {
                    DS9_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS9_S) {
                    DS9_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH9_L) {
                    LH9_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH9_H) {
                    LH9_H.value = json.money;
                }
            }
            break;
        case 9:
            if (json.type === "大") {
                if (DX10_D) {
                    DX10_D.value = json.money;
                }
            }
            if (json.type === "小") {
                if (DX10_X) {
                    DX10_X.value = json.money;
                }
            }
            if (json.type === "单") {
                if (DS10_D) {
                    DS10_D.value = json.money;
                }
            }
            if (json.type === "双") {
                if (DS10_S) {
                    DS10_S.value = json.money;
                }
            }
            if (json.type === "龙") {
                if (LH10_L) {
                    LH10_L.value = json.money;
                }
            }
            if (json.type === "虎") {
                if (LH10_H) {
                    LH10_H.value = json.money;
                }
            }
            break;
    }
}

function clear_write_data() {

    if (DX1_D) {
        DX1_D.value = "";
    }
    if (DX1_X) {
        DX1_X.value = "";
    }
    if (DS1_D) {
        DS1_D.value = "";
    }
    if (DS1_S) {
        DS1_S.value = "";
    }
    if (LH1_L) {
        LH1_L.value = "";
    }
    if (LH1_H) {
        LH1_H.value = "";
    }

    if (DX2_D) {
        DX2_D.value = "";
    }
    if (DX2_X) {
        DX2_X.value = "";
    }
    if (DS2_D) {
        DS2_D.value = "";
    }
    if (DS2_S) {
        DS2_S.value = "";
    }
    if (LH2_L) {
        LH2_L.value = "";
    }
    if (LH2_H) {
        LH2_H.value = "";
    }

    if (DX3_D) {
        DX3_D.value = "";
    }
    if (DX3_X) {
        DX3_X.value = "";
    }
    if (DS3_D) {
        DS3_D.value = "";
    }
    if (DS3_S) {
        DS3_S.value = "";
    }
    if (LH3_L) {
        LH3_L.value = "";
    }
    if (LH3_H) {
        LH3_H.value = "";
    }

    if (DX4_D) {
        DX4_D.value = "";
    }
    if (DX4_X) {
        DX4_X.value = "";
    }
    if (DS4_D) {
        DS4_D.value = "";
    }
    if (DS4_S) {
        DS4_S.value = "";
    }
    if (LH4_L) {
        LH4_L.value = "";
    }
    if (LH4_H) {
        LH4_H.value = "";
    }

    if (DX5_D) {
        DX5_D.value = "";
    }
    if (DX5_X) {
        DX5_X.value = "";
    }
    if (DS5_D) {
        DS5_D.value = "";
    }
    if (DS5_S) {
        DS5_S.value = "";
    }
    if (LH5_L) {
        LH5_L.value = "";
    }
    if (LH5_H) {
        LH5_H.value = "";
    }

    if (DX6_D) {
        DX6_D.value = "";
    }
    if (DX6_X) {
        DX6_X.value = "";
    }
    if (DS6_D) {
        DS6_D.value = "";
    }
    if (DS6_S) {
        DS6_S.value = "";
    }
    if (LH6_L) {
        LH6_L.value = "";
    }
    if (LH6_H) {
        LH6_H.value = "";
    }

    if (DX7_D) {
        DX7_D.value = "";
    }
    if (DX7_X) {
        DX7_X.value = "";
    }
    if (DS7_D) {
        DS7_D.value = "";
    }
    if (DS7_S) {
        DS7_S.value = "";
    }
    if (LH7_L) {
        LH7_L.value = "";
    }
    if (LH7_H) {
        LH7_H.value = "";
    }

    if (DX8_D) {
        DX8_D.value = "";
    }
    if (DX8_X) {
        DX8_X.value = "";
    }
    if (DS8_D) {
        DS8_D.value = "";
    }
    if (DS8_S) {
        DS8_S.value = "";
    }
    if (LH8_L) {
        LH8_L.value = "";
    }
    if (LH8_H) {
        LH8_H.value = "";
    }

    if (DX9_D) {
        DX9_D.value = "";
    }
    if (DX9_X) {
        DX9_X.value = "";
    }
    if (DS9_D) {
        DS9_D.value = "";
    }
    if (DS9_S) {
        DS9_S.value = "";
    }
    if (LH9_L) {
        LH9_L.value = "";
    }
    if (LH9_H) {
        LH9_H.value = "";
    }

    if (DX10_D) {
        DX10_D.value = "";
    }
    if (DX10_X) {
        DX10_X.value = "";
    }
    if (DS10_D) {
        DS10_D.value = "";
    }
    if (DS10_S) {
        DS10_S.value = "";
    }
    if (LH10_L) {
        LH10_L.value = "";
    }
    if (LH10_H) {
        LH10_H.value = "";
    }

}

/**
 * 判断是否指定使用网站
 * @returns {boolean}
 * @constructor
 */
function IsWriteUrl() {
    var url = window.location.href;
    for (var i = 0; i < urlArray.length; i++) {
        if (url.indexOf(urlArray[i]) != -1) {
            return true;
        }
    }
    return false;
}

var B1_all = [
    document.getElementsByName("B1_1")[0],
    document.getElementsByName("B1_2")[0],
    document.getElementsByName("B1_3")[0],
    document.getElementsByName("B1_4")[0],
    document.getElementsByName("B1_5")[0],
    document.getElementsByName("B1_6")[0],
    document.getElementsByName("B1_7")[0],
    document.getElementsByName("B1_8")[0],
    document.getElementsByName("B1_9")[0],
    document.getElementsByName("B1_10")[0],
]

var B2_all = [
    document.getElementsByName("B2_1")[0],
    document.getElementsByName("B2_2")[0],
    document.getElementsByName("B2_3")[0],
    document.getElementsByName("B2_4")[0],
    document.getElementsByName("B2_5")[0],
    document.getElementsByName("B2_6")[0],
    document.getElementsByName("B2_7")[0],
    document.getElementsByName("B2_8")[0],
    document.getElementsByName("B2_9")[0],
    document.getElementsByName("B2_10")[0],
]

var B3_all = [
    document.getElementsByName("B3_1")[0],
    document.getElementsByName("B3_2")[0],
    document.getElementsByName("B3_3")[0],
    document.getElementsByName("B3_4")[0],
    document.getElementsByName("B3_5")[0],
    document.getElementsByName("B3_6")[0],
    document.getElementsByName("B3_7")[0],
    document.getElementsByName("B3_8")[0],
    document.getElementsByName("B3_9")[0],
    document.getElementsByName("B3_10")[0],
]

var B4_all = [
    document.getElementsByName("B4_1")[0],
    document.getElementsByName("B4_2")[0],
    document.getElementsByName("B4_3")[0],
    document.getElementsByName("B4_4")[0],
    document.getElementsByName("B4_5")[0],
    document.getElementsByName("B4_6")[0],
    document.getElementsByName("B4_7")[0],
    document.getElementsByName("B4_8")[0],
    document.getElementsByName("B4_9")[0],
    document.getElementsByName("B4_10")[0],
]

var B5_all = [
    document.getElementsByName("B5_1")[0],
    document.getElementsByName("B5_2")[0],
    document.getElementsByName("B5_3")[0],
    document.getElementsByName("B5_4")[0],
    document.getElementsByName("B5_5")[0],
    document.getElementsByName("B5_6")[0],
    document.getElementsByName("B5_7")[0],
    document.getElementsByName("B5_8")[0],
    document.getElementsByName("B5_9")[0],
    document.getElementsByName("B5_10")[0],
]

var B6_all = [
    document.getElementsByName("B6_1")[0],
    document.getElementsByName("B6_2")[0],
    document.getElementsByName("B6_3")[0],
    document.getElementsByName("B6_4")[0],
    document.getElementsByName("B6_5")[0],
    document.getElementsByName("B6_6")[0],
    document.getElementsByName("B6_7")[0],
    document.getElementsByName("B6_8")[0],
    document.getElementsByName("B6_9")[0],
    document.getElementsByName("B6_10")[0],
]

var B7_all = [
    document.getElementsByName("B7_1")[0],
    document.getElementsByName("B7_2")[0],
    document.getElementsByName("B7_3")[0],
    document.getElementsByName("B7_4")[0],
    document.getElementsByName("B7_5")[0],
    document.getElementsByName("B7_6")[0],
    document.getElementsByName("B7_7")[0],
    document.getElementsByName("B7_8")[0],
    document.getElementsByName("B7_9")[0],
    document.getElementsByName("B7_10")[0],
]

var B8_all = [
    document.getElementsByName("B8_1")[0],
    document.getElementsByName("B8_2")[0],
    document.getElementsByName("B8_3")[0],
    document.getElementsByName("B8_4")[0],
    document.getElementsByName("B8_5")[0],
    document.getElementsByName("B8_6")[0],
    document.getElementsByName("B8_7")[0],
    document.getElementsByName("B8_8")[0],
    document.getElementsByName("B8_9")[0],
    document.getElementsByName("B8_10")[0],
]

var B9_all = [
    document.getElementsByName("B9_1")[0],
    document.getElementsByName("B9_2")[0],
    document.getElementsByName("B9_3")[0],
    document.getElementsByName("B9_4")[0],
    document.getElementsByName("B9_5")[0],
    document.getElementsByName("B9_6")[0],
    document.getElementsByName("B9_7")[0],
    document.getElementsByName("B9_8")[0],
    document.getElementsByName("B9_9")[0],
    document.getElementsByName("B9_10")[0],
]

var B10_all = [
    document.getElementsByName("B10_1")[0],
    document.getElementsByName("B10_2")[0],
    document.getElementsByName("B10_3")[0],
    document.getElementsByName("B10_4")[0],
    document.getElementsByName("B10_5")[0],
    document.getElementsByName("B10_6")[0],
    document.getElementsByName("B10_7")[0],
    document.getElementsByName("B10_8")[0],
    document.getElementsByName("B10_9")[0],
    document.getElementsByName("B10_10")[0],
]


/**
 * 清除B
 */
function clear_B() {
    for (var i = 0; i < 10; i++) {
        if (B1_all[i]) {
            B1_all[i].value = "";
        }
        if (B2_all[i]) {
            B2_all[i].value = "";
        }
        if (B3_all[i]) {
            B3_all[i].value = "";
        }
        if (B4_all[i]) {
            B4_all[i].value = "";
        }
        if (B5_all[i]) {
            B5_all[i].value = "";
        }
        if (B6_all[i]) {
            B6_all[i].value = "";
        }
        if (B7_all[i]) {
            B7_all[i].value = "";
        }
        if (B8_all[i]) {
            B8_all[i].value = "";
        }
        if (B9_all[i]) {
            B9_all[i].value = "";
        }
        if (B10_all[i]) {
            B10_all[i].value = "";
        }
    }
}

/**
 * 写入数据
 * @param size
 * @param json
 */
function write_b(size, json) {
    switch (size) {
        case 0:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B1_all[i])
                            B1_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B1_all[i])
                            B1_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 1:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B2_all[i])
                            B2_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B2_all[i])
                            B2_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 2:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B3_all[i])
                            B3_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B3_all[i])
                            B3_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 3:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B4_all[i])
                            B4_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B4_all[i])
                            B4_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 4:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B5_all[i])
                            B5_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B5_all[i])
                            B5_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 5:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B6_all[i])
                            B6_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B6_all[i])
                            B6_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 6:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B7_all[i])
                            B7_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B7_all[i])
                            B7_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 7:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B8_all[i])
                            B8_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B8_all[i])
                            B8_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 8:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B9_all[i])
                            B9_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B9_all[i])
                            B9_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
        case 9:
            if (json.type === "龙") {
                for (var i = 0; i < 10; i++) {
                    if (i === 0 || i === 1 || i === 3 || i === 6 || i === 9) {
                        if (B10_all[i])
                            B10_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            if (json.type === "虎") {
                for (var i = 0; i < 10; i++) {
                    if (i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
                        if (B10_all[i])
                            B10_all[i].value = parseInt(parseInt(json.money) / 5);
                    }
                }
            }
            break;
    }

}

function init_node_data() {
    DX1_D = window.frames["frame"].document.getElementsByName("DX1_D")[0];
    DX1_X = window.frames["frame"].document.getElementsByName("DX1_X")[0];
    DS1_D = window.frames["frame"].document.getElementsByName("DS1_D")[0];
    DS1_S = window.frames["frame"].document.getElementsByName("DS1_S")[0];
    LH1_L = window.frames["frame"].document.getElementsByName("LH1_L")[0];
    LH1_H = window.frames["frame"].document.getElementsByName("LH1_H")[0];

    DX2_D = window.frames["frame"].document.getElementsByName("DX2_D")[0];
    DX2_X = window.frames["frame"].document.getElementsByName("DX2_X")[0];
    DS2_D = window.frames["frame"].document.getElementsByName("DS2_D")[0];
    DS2_S = window.frames["frame"].document.getElementsByName("DS2_S")[0];
    LH2_L = window.frames["frame"].document.getElementsByName("LH2_L")[0];
    LH2_H = window.frames["frame"].document.getElementsByName("LH2_H")[0];

    DX3_D = window.frames["frame"].document.getElementsByName("DX3_D")[0];
    DX3_X = window.frames["frame"].document.getElementsByName("DX3_X")[0];
    DS3_D = window.frames["frame"].document.getElementsByName("DS3_D")[0];
    DS3_S = window.frames["frame"].document.getElementsByName("DS3_S")[0];
    LH3_L = window.frames["frame"].document.getElementsByName("LH3_L")[0];
    LH3_H = window.frames["frame"].document.getElementsByName("LH3_H")[0];

    DX4_D = window.frames["frame"].document.getElementsByName("DX4_D")[0];
    DX4_X = window.frames["frame"].document.getElementsByName("DX4_X")[0];
    DS4_D = window.frames["frame"].document.getElementsByName("DS4_D")[0];
    DS4_S = window.frames["frame"].document.getElementsByName("DS4_S")[0];
    LH4_L = window.frames["frame"].document.getElementsByName("LH4_L")[0];
    LH4_H = window.frames["frame"].document.getElementsByName("LH4_H")[0];

    DX5_D = window.frames["frame"].document.getElementsByName("DX5_D")[0];
    DX5_X = window.frames["frame"].document.getElementsByName("DX5_X")[0];
    DS5_D = window.frames["frame"].document.getElementsByName("DS5_D")[0];
    DS5_S = window.frames["frame"].document.getElementsByName("DS5_S")[0];
    LH5_L = window.frames["frame"].document.getElementsByName("LH5_L")[0];
    LH5_H = window.frames["frame"].document.getElementsByName("LH5_H")[0];

    DX6_D = window.frames["frame"].document.getElementsByName("DX6_D")[0];
    DX6_X = window.frames["frame"].document.getElementsByName("DX6_X")[0];
    DS6_D = window.frames["frame"].document.getElementsByName("DS6_D")[0];
    DS6_S = window.frames["frame"].document.getElementsByName("DS6_S")[0];
    LH6_L = window.frames["frame"].document.getElementsByName("LH6_L")[0];
    LH6_H = window.frames["frame"].document.getElementsByName("LH6_H")[0];

    DX7_D = window.frames["frame"].document.getElementsByName("DX7_D")[0];
    DX7_X = window.frames["frame"].document.getElementsByName("DX7_X")[0];
    DS7_D = window.frames["frame"].document.getElementsByName("DS7_D")[0];
    DS7_S = window.frames["frame"].document.getElementsByName("DS7_S")[0];
    LH7_L = window.frames["frame"].document.getElementsByName("LH7_L")[0];
    LH7_H = window.frames["frame"].document.getElementsByName("LH7_H")[0];

    DX8_D = window.frames["frame"].document.getElementsByName("DX8_D")[0];
    DX8_X = window.frames["frame"].document.getElementsByName("DX8_X")[0];
    DS8_D = window.frames["frame"].document.getElementsByName("DS8_D")[0];
    DS8_S = window.frames["frame"].document.getElementsByName("DS8_S")[0];
    LH8_L = window.frames["frame"].document.getElementsByName("LH8_L")[0];
    LH8_H = window.frames["frame"].document.getElementsByName("LH8_H")[0];

    DX9_D = window.frames["frame"].document.getElementsByName("DX9_D")[0];
    DX9_X = window.frames["frame"].document.getElementsByName("DX9_X")[0];
    DS9_D = window.frames["frame"].document.getElementsByName("DS9_D")[0];
    DS9_S = window.frames["frame"].document.getElementsByName("DS9_S")[0];
    LH9_L = window.frames["frame"].document.getElementsByName("LH9_L")[0];
    LH9_H = window.frames["frame"].document.getElementsByName("LH9_H")[0];

    DX10_D = window.frames["frame"].document.getElementsByName("DX10_D")[0];
    DX10_X = window.frames["frame"].document.getElementsByName("DX10_X")[0];
    DS10_D = window.frames["frame"].document.getElementsByName("DS10_D")[0];
    DS10_S = window.frames["frame"].document.getElementsByName("DS10_S")[0];
    LH10_L = window.frames["frame"].document.getElementsByName("LH10_L")[0];
    LH10_H = window.frames["frame"].document.getElementsByName("LH10_H")[0];

    B1_all = [
        window.frames["frame"].document.getElementsByName("B1_1")[0],
        window.frames["frame"].document.getElementsByName("B1_2")[0],
        window.frames["frame"].document.getElementsByName("B1_3")[0],
        window.frames["frame"].document.getElementsByName("B1_4")[0],
        window.frames["frame"].document.getElementsByName("B1_5")[0],
        window.frames["frame"].document.getElementsByName("B1_6")[0],
        window.frames["frame"].document.getElementsByName("B1_7")[0],
        window.frames["frame"].document.getElementsByName("B1_8")[0],
        window.frames["frame"].document.getElementsByName("B1_9")[0],
        window.frames["frame"].document.getElementsByName("B1_10")[0],
    ]

    B2_all = [
        window.frames["frame"].document.getElementsByName("B2_1")[0],
        window.frames["frame"].document.getElementsByName("B2_2")[0],
        window.frames["frame"].document.getElementsByName("B2_3")[0],
        window.frames["frame"].document.getElementsByName("B2_4")[0],
        window.frames["frame"].document.getElementsByName("B2_5")[0],
        window.frames["frame"].document.getElementsByName("B2_6")[0],
        window.frames["frame"].document.getElementsByName("B2_7")[0],
        window.frames["frame"].document.getElementsByName("B2_8")[0],
        window.frames["frame"].document.getElementsByName("B2_9")[0],
        window.frames["frame"].document.getElementsByName("B2_10")[0],
    ]

    B3_all = [
        window.frames["frame"].document.getElementsByName("B3_1")[0],
        window.frames["frame"].document.getElementsByName("B3_2")[0],
        window.frames["frame"].document.getElementsByName("B3_3")[0],
        window.frames["frame"].document.getElementsByName("B3_4")[0],
        window.frames["frame"].document.getElementsByName("B3_5")[0],
        window.frames["frame"].document.getElementsByName("B3_6")[0],
        window.frames["frame"].document.getElementsByName("B3_7")[0],
        window.frames["frame"].document.getElementsByName("B3_8")[0],
        window.frames["frame"].document.getElementsByName("B3_9")[0],
        window.frames["frame"].document.getElementsByName("B3_10")[0],
    ]

    B4_all = [
        window.frames["frame"].document.getElementsByName("B4_1")[0],
        window.frames["frame"].document.getElementsByName("B4_2")[0],
        window.frames["frame"].document.getElementsByName("B4_3")[0],
        window.frames["frame"].document.getElementsByName("B4_4")[0],
        window.frames["frame"].document.getElementsByName("B4_5")[0],
        window.frames["frame"].document.getElementsByName("B4_6")[0],
        window.frames["frame"].document.getElementsByName("B4_7")[0],
        window.frames["frame"].document.getElementsByName("B4_8")[0],
        window.frames["frame"].document.getElementsByName("B4_9")[0],
        window.frames["frame"].document.getElementsByName("B4_10")[0],
    ]

    B5_all = [
        window.frames["frame"].document.getElementsByName("B5_1")[0],
        window.frames["frame"].document.getElementsByName("B5_2")[0],
        window.frames["frame"].document.getElementsByName("B5_3")[0],
        window.frames["frame"].document.getElementsByName("B5_4")[0],
        window.frames["frame"].document.getElementsByName("B5_5")[0],
        window.frames["frame"].document.getElementsByName("B5_6")[0],
        window.frames["frame"].document.getElementsByName("B5_7")[0],
        window.frames["frame"].document.getElementsByName("B5_8")[0],
        window.frames["frame"].document.getElementsByName("B5_9")[0],
        window.frames["frame"].document.getElementsByName("B5_10")[0],
    ]

    B6_all = [
        window.frames["frame"].document.getElementsByName("B6_1")[0],
        window.frames["frame"].document.getElementsByName("B6_2")[0],
        window.frames["frame"].document.getElementsByName("B6_3")[0],
        window.frames["frame"].document.getElementsByName("B6_4")[0],
        window.frames["frame"].document.getElementsByName("B6_5")[0],
        window.frames["frame"].document.getElementsByName("B6_6")[0],
        window.frames["frame"].document.getElementsByName("B6_7")[0],
        window.frames["frame"].document.getElementsByName("B6_8")[0],
        window.frames["frame"].document.getElementsByName("B6_9")[0],
        window.frames["frame"].document.getElementsByName("B6_10")[0],
    ]

    B7_all = [
        window.frames["frame"].document.getElementsByName("B7_1")[0],
        window.frames["frame"].document.getElementsByName("B7_2")[0],
        window.frames["frame"].document.getElementsByName("B7_3")[0],
        window.frames["frame"].document.getElementsByName("B7_4")[0],
        window.frames["frame"].document.getElementsByName("B7_5")[0],
        window.frames["frame"].document.getElementsByName("B7_6")[0],
        window.frames["frame"].document.getElementsByName("B7_7")[0],
        window.frames["frame"].document.getElementsByName("B7_8")[0],
        window.frames["frame"].document.getElementsByName("B7_9")[0],
        window.frames["frame"].document.getElementsByName("B7_10")[0],
    ]

    B8_all = [
        window.frames["frame"].document.getElementsByName("B8_1")[0],
        window.frames["frame"].document.getElementsByName("B8_2")[0],
        window.frames["frame"].document.getElementsByName("B8_3")[0],
        window.frames["frame"].document.getElementsByName("B8_4")[0],
        window.frames["frame"].document.getElementsByName("B8_5")[0],
        window.frames["frame"].document.getElementsByName("B8_6")[0],
        window.frames["frame"].document.getElementsByName("B8_7")[0],
        window.frames["frame"].document.getElementsByName("B8_8")[0],
        window.frames["frame"].document.getElementsByName("B8_9")[0],
        window.frames["frame"].document.getElementsByName("B8_10")[0],
    ]

    B9_all = [
        window.frames["frame"].document.getElementsByName("B9_1")[0],
        window.frames["frame"].document.getElementsByName("B9_2")[0],
        window.frames["frame"].document.getElementsByName("B9_3")[0],
        window.frames["frame"].document.getElementsByName("B9_4")[0],
        window.frames["frame"].document.getElementsByName("B9_5")[0],
        window.frames["frame"].document.getElementsByName("B9_6")[0],
        window.frames["frame"].document.getElementsByName("B9_7")[0],
        window.frames["frame"].document.getElementsByName("B9_8")[0],
        window.frames["frame"].document.getElementsByName("B9_9")[0],
        window.frames["frame"].document.getElementsByName("B9_10")[0],
    ]

    B10_all = [
        window.frames["frame"].document.getElementsByName("B10_1")[0],
        window.frames["frame"].document.getElementsByName("B10_2")[0],
        window.frames["frame"].document.getElementsByName("B10_3")[0],
        window.frames["frame"].document.getElementsByName("B10_4")[0],
        window.frames["frame"].document.getElementsByName("B10_5")[0],
        window.frames["frame"].document.getElementsByName("B10_6")[0],
        window.frames["frame"].document.getElementsByName("B10_7")[0],
        window.frames["frame"].document.getElementsByName("B10_8")[0],
        window.frames["frame"].document.getElementsByName("B10_9")[0],
        window.frames["frame"].document.getElementsByName("B10_10")[0],
    ]
}