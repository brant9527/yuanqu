/*
 * @Author: Evan-lian
 * @Date: 2018-09-20 16:04:42
 * @LastEditors: Evan-lian
 * @LastEditTime: 2018-09-20 16:04:42
 * @Description: 针对对象 ，字符串的操作处理
 */

export const EsspObject = {
     /*
        * 检测对象是否是空对象(不包含任何可读属性)。
        * 方法既检测对象本身的属性，也检测从原型继承的属性(因此没有使用hasOwnProperty)。
        */
       isEmptyObj: function(obj)
       {
           var arr = Object.keys(obj);
           return arr.length == 0

       },
       /**
        * 检测对象是否包含某个属性值
        */
       hasPrototype:function(object,name){
           return object.hasOwnProperty(name)&&(name in object);
       },
       /**
        * 判断是否是某个类型
        */
       istype: function(o, type) {
           if (type) {
               var _type = type.toLowerCase();
           }
           switch (_type) {
               case 'string':
                   return Object.prototype.toString.call(o) === '[object String]';
               case 'number':
                   return Object.prototype.toString.call(o) === '[object Number]';
               case 'boolean':
                   return Object.prototype.toString.call(o) === '[object Boolean]';
               case 'undefined':
                   return Object.prototype.toString.call(o) === '[object Undefined]';
               case 'null':
                   return Object.prototype.toString.call(o) === '[object Null]';
               case 'function':
                   return Object.prototype.toString.call(o) === '[object Function]';
               case 'array':
                   return Object.prototype.toString.call(o) === '[object Array]';
               case 'object':
                   return Object.prototype.toString.call(o) === '[object Object]';
               case 'nan':
                   return isNaN(o);
               case 'elements':
                   return Object.prototype.toString.call(o).indexOf('HTML') !== -1
               default:
                   return Object.prototype.toString.call(o)
           }
       },
       /**字符串
       *去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
       */
       
       trim : function(str, type) {
           switch (type) {
               case 1:
                   return str.replace(/\s+/g, "");
               case 2:
                   return str.replace(/(^\s*)|(\s*$)/g, "");
               case 3:
                   return str.replace(/(^\s*)/g, "");
               case 4:
                   return str.replace(/(\s*$)/g, "");
               default:
                   return str;
           }
       }
}