/*
 * @Author: Evan-lian
 * @Date: 2018-09-20 16:04:14
 * @LastEditors: Evan-lian
 * @LastEditTime: 2018-09-20 16:16:49
 * @Description: 针对号码和邮箱类操作
 */

export const EsspMobileEmail = {
    /***
    *获得匹配已开通手机号的正则(可能来自全局配置)
    *@returns {RegExp}
    **/
    getMobileRegex: function () {
        return new RegExp("^8613[0-9]{9}$|^8614[57][0-9]{8}$|^8615[012356789][0-9]{8}$|^861[89][0123456789][0-9]{8}$|^8617[35678][0-9]{8}$|^86170[0124579][0-9]{7}$|^86171[89][0-9]{7}$");

    },
    /**
    *给手机号码添加86，如果已存在则不添加
    *@returns {String}
    */
   add86: function (text) {
        if (typeof text != "string") {
            text = text.toString()
        };
        return text.trim().replace(/^(?:86)?(?=\d{11}$)/, "86");
    },
    /***
    *检测输入文本是否为一个手机号（中国大陆的手机号），文本必须为纯数字号码
    *此方法不仅限于移动号，可以支持电信，联通
    *默认添加86,再调正则判断号码，添加13,14,15,17,18开头的号码段 
    *@param {String} text 要检测的文本
    *@returns {Boolean}
    **/
    isMobile: function (text) {
        text = this.add86(text);
        return this.getMobileRegex().test(text);
    },
    /**
     * 判断手机类型
     */
    browserInfo: function(type) {
        switch (type) {
            case 'android':
                return navigator.userAgent.toLowerCase().indexOf('android') !== -1
            case 'iphone':
                return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
            case 'ipad':
                return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
            case 'weixin':
                return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
            default:
                return navigator.userAgent.toLowerCase()
        }
    },
    /**
     * 判断是否是一个有效的邮箱地址
     */
    isEmail:function(text){
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        return reg.test(text)
    }
}