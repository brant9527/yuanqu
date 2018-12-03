/*
 * @Author: Evan-lian
 * @Date: 2018-09-20 16:02:56
 * @LastEditors: Evan-lian
 * @LastEditTime: 2018-09-20 16:03:25
 * @Description: 针对cookie的处理
 */
export const EsspCookies = {
    //设置cookie
    setCookie: function(name, value, iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },
    //获取cookie
    getCookie: function(name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
    },
    //删除cookie
    removeCookie: function(name) {
        this.setCookie(name, 1, -1);
    },
}