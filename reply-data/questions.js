module.exports = {
    question_all: [{
        "type": "action", // ③
        "action": {
            label: '硬體',
            type: 'postback',
            data: 'q1'
        }
    }, {
        "type": "action", // ③
        "action": {
            label: '作業系統',
            type: 'postback',
            data: 'q2'
        }
    }, {
        "type": "action", // ③
        "action": {
            label: '應用軟體',
            type: 'postback',
            data: 'q3'
        }
    }, {
        "type": "action", // ③
        "action": {
            label: '網路',
            type: 'postback',
            data: 'q4'
        }
    }, {
        "type": "action", // ③
        "action": {
            label: '其他',
            type: 'postback',
            data: 'q5'
        }
    }],
    question: {
        q1: {
            text: '螢幕不亮、黑屏\n請點選1_1\n\n' +
                '螢幕變色、螢幕色彩不對、螢幕顏色不對\n請點選1_2\n\n' +
                '螢幕閃爍\n請點選1_3\n\n' +
                '有電源無反應\n有過電無法開機\n有過電不能開機\n不能開機\n無法開機\n請點選1_4\n\n' +
                '主機無反應\n沒反應\n請點選1_5\n\n' +
                '無桌面\n沒桌面\n請點選1_6\n\n' +
                '一直重開機\n自動重開\n請點選1_7\n\n' +
                '藍屏\n死機\n請點選1_8\n\n' +
                '無法正常使用\nwin10不正常\n不正常\n請點選1_9\n\n',
            items: [{
                "type": "action",
                "action": {
                    label: '1_1',
                    type: 'postback',
                    data: '1_1'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_2',
                    type: 'postback',
                    data: '1_2'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_3',
                    type: 'postback',
                    data: '1_3'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_4',
                    type: 'postback',
                    data: '1_4'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_5',
                    type: 'postback',
                    data: '1_5'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_6',
                    type: 'postback',
                    data: '1_6'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_7',
                    type: 'postback',
                    data: '1_7'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_8',
                    type: 'postback',
                    data: '1_8'
                }
            }, {
                "type": "action",
                "action": {
                    label: '1_9',
                    type: 'postback',
                    data: '1_9'
                }
            }]
        }
    },

    reply: {
        "1_1": "所選問題：螢幕不亮、黑屏\n\n建議如下：\n1.請檢察螢幕電源線有插 ? \n2.請檢察開關有開嗎 ?\n3.請檢察螢幕訊號線有接牢嗎 ?",
        "1_2": "所選問題：螢幕變色、螢幕色彩不對、螢幕顏色不對\n\n建議如下：\n1.請檢察螢幕信號線是否接牢 ? \n2.請檢察螢幕訊號線針腳是否折到?",
        "1_3": "所選問題：螢幕閃爍\n\n建議如下：\n1.請將螢幕電源更換插其他插座測試看看 ?\n2.請執行Windows Update後再觀察是否改善？",
        "1_4": "所選問題：有電源無反應\n有過電無法開機\n有過電不能開機\n不能開機\n無法開機\n\n建議如下：\n1.確認延長線開關是否有開啟？\n2.螢幕電源線及訊號線(VGA、HDMI、DP…….)是否有鬆脫？\n3.有裝獨立顯示卡，請將訊號線(VGA、HDMI、DP…….)接在顯卡上。\n4.以上若還是未能解決您的問題，請報修企劃處。 ",
        "1_5": "所選問題：主機無反應\n沒反應\n\n建議如下：\n建議如下：\n1.確認延長線開關是否有開啟？\n2.主機電源線是否有鬆脫？\n3.以上若還是未能解決您的問題，請報修企劃處。",
        "1_6": "所選問題：無桌面\n沒桌面\n\n建議如下：\n建議如下：\n1.請報修企劃處。",
        "1_7": "所選問題：一直重開機\n自動重開\n\n建議如下：\n1.更換延長線\n2.以上若還是未能解決您的問題，請報修企劃處。",
        "1_8": "所選問題：藍屏\n死機\n\n建議如下：\n1.先移除所有周邊設備(鍵盤及滑鼠除外)\n2.若是新安裝某軟體後才發生，請進入安全模式移除該軟體 。\n3.以上若還是未能解決您的問題，請報修企劃處。",
        "1_9": "所選問題：無法正常使用\nwin10不正常\n不正常\n\n建議如下：\n1.請報修企劃處。0000"
    }


}
