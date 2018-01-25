
//接收消息
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        write_data(request);//本地json文件
        //write_data(JSON.parse(request))//服务获取可能需要转换
        sendResponse({"state": "ok"});
    }
);


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
    var daxiao = json_data.daxiao;
    var danshaung = json_data.danshuang;
    var longhu = json_data.longhu;
    for(var i = 0;i < daxiao.length;i++){
        write_daxiao(i,daxiao[i]);
    }
    for(var i = 0;i < danshaung.length;i++){
        write_daxiao(i,danshaung[i]);
    }
    for(var i = 0;i < longhu.length;i++){
        write_daxiao(i,longhu[i]);
    }
}

function write_daxiao(size,json) {
    switch (size){
        case 1:
            if(json.type === "大"){
                if (DX1_D) {
                    DX1_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX1_X) {
                    DX1_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS1_D) {
                    DS1_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS1_S) {
                    DS1_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH1_L) {
                    LH1_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH1_H) {
                    LH1_H.value= json.money;
                }
            }
            break;
        case 2:
            if(json.type === "大"){
                if (DX2_D) {
                    DX2_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX2_X) {
                    DX2_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS2_D) {
                    DS2_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS2_S) {
                    DS2_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH2_L) {
                    LH2_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH2_H) {
                    LH2_H.value= json.money;
                }
            }
            break;
        case 3:
            if(json.type === "大"){
                if (DX3_D) {
                    DX3_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX3_X) {
                    DX3_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS3_D) {
                    DS3_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS3_S) {
                    DS3_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH3_L) {
                    LH3_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH3_H) {
                    LH3_H.value= json.money;
                }
            }
            break;
        case 4:
            if(json.type === "大"){
                if (DX4_D) {
                    DX4_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX4_X) {
                    DX4_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS4_D) {
                    DS4_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS4_S) {
                    DS4_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH4_L) {
                    LH4_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH4_H) {
                    LH4_H.value= json.money;
                }
            }
            break;
        case 5:
            if(json.type === "大"){
                if (DX5_D) {
                    DX5_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX5_X) {
                    DX5_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS5_D) {
                    DS5_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS5_S) {
                    DS5_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH5_L) {
                    LH5_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH5_H) {
                    LH5_H.value= json.money;
                }
            }
            break;
        case 6:
            if(json.type === "大"){
                if (DX6_D) {
                    DX6_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX6_X) {
                    DX6_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS6_D) {
                    DS6_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS6_S) {
                    DS6_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH6_L) {
                    LH6_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH6_H) {
                    LH6_H.value= json.money;
                }
            }
            break;
        case 7:
            if(json.type === "大"){
                if (DX7_D) {
                    DX7_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX7_X) {
                    DX7_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS7_D) {
                    DS7_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS7_S) {
                    DS7_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH7_L) {
                    LH7_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH7_H) {
                    LH7_H.value= json.money;
                }
            }
            break;
        case 8:
            if(json.type === "大"){
                if (DX8_D) {
                    DX8_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX8_X) {
                    DX8_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS8_D) {
                    DS8_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS8_S) {
                    DS8_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH8_L) {
                    LH8_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH8_H) {
                    LH8_H.value= json.money;
                }
            }
            break;
        case 9:
            if(json.type === "大"){
                if (DX9_D) {
                    DX1_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX9_X) {
                    DX9_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS9_D) {
                    DS9_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS9_S) {
                    DS9_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH9_L) {
                    LH9_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH9_H) {
                    LH9_H.value= json.money;
                }
            }
            break;
        case 10:
            if(json.type === "大"){
                if (DX10_D) {
                    DX10_D.value = json.money;
                }
            }
            if(json.type === "小"){
                if (DX10_X) {
                    DX10_X.value= json.money;
                }
            }
            if(json.type === "单"){
                if (DS10_D) {
                    DS10_D.value= json.money;
                }
            }
            if(json.type === "双"){
                if (DS10_S) {
                    DS10_S.value= json.money;
                }
            }
            if(json.type === "龙"){
                if (LH10_L) {
                    LH10_L.value= json.money;
                }
            }
            if(json.type === "虎"){
                if (LH10_H) {
                    LH10_H.value= json.money;
                }
            }
            break;
    }
}

