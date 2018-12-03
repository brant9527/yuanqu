/*
 * @Author: Evan-lian
 * @Date: 2018-09-20 16:03:32
 * @LastEditors: Evan-lian
 * @LastEditTime: 2018-09-20 16:03:32
 * @Description: 针对数组的处理
 */

export const EsspArray = {
    /**
     * 数组去重
     */
    removeRepeatArray: function(arr) {
        return Array.from(new Set(arr))
    },
    /**
     * 获取数组最大值
     */
    maxArr: function(arr) {
        return Math.max.apply(null, arr);
    },
    /**
     * 获取数组最小值
     */
    minArr: function(arr) {
        return Math.min.apply(null, arr);
    },
    /**
     * 获取数组的总和
     */
    sumArr: function(arr) {
        return arr.reduce(function(pre, cur) {
            return pre + cur
        })
    }
}