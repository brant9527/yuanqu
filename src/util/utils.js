import constants from "./constants";
import SSH from './sessionStorageHandler'
import LSH from './localStorageHandler'
import {del} from '../fetch/http'
import {apiUrl} from '../fetch/apiUrl'
import {Message} from 'element-ui';
import store from '../store'
import router from '../router'

const utils = {
    /**
     *  非空判断
     *  value: 需要判断的值
     */
    isEmpty: function (value) {
        if (value == '' || value == 'null' || value == null || typeof value == 'undefined' || JSON.stringify(value) == '{}') {
            return true;
        } else {
            return false;
        }
    },
    /**
     *  冻结后无法访问url判断
     *  postUrl：访问后台url
     */
    isFreeze: function (postUrl) {
        let listUrl = constants.urlList
        for (let o of listUrl) {
            if (o.indexOf(postUrl) !== -1) {
                return true
                break
            }
        }
        return false
    },
    /**
     * 是否忽略显示进度的URL
     *
     * @param {Srting} postUrl url
     * @memberof utils
     */
    isIgnoreProcess: function (postUrl) {
        return constants.ignoreProcessUrl.indexOf(postUrl) > -1;
    },
    /**
     *  角色判断，传入值为String或者数组类型
     *  role:  需要被校验的角色
     */
    roleExist: function (role) {
        var roleList = []
        if (SSH.getItem('userInfo') && !utils.isEmpty(SSH.getItem('userInfo').userPostList)) {
            roleList = SSH.getItem('userInfo').userPostList
        } else {
            return false
        }
        if (typeof role == 'object') {
            for (var i = 0; i < role.length; i++) {
                if (roleList.indexOf(role[i]) > -1) {
                    return true
                }
            }
        } else if (typeof role == 'string') {
            if (roleList.indexOf(role) > -1) {
                return true
            }
        }
        return false
    },
    /**
     *   数组是否含有一个元素或是否含有另一个数组
     *   name： 被含有元素或数组
     *   nameList： 该数组是否包含其他
     */
    arrayIsContain: function (name, nameList) {
        if (utils.isEmpty(name) || utils.isEmpty(nameList)) {
            return false
        }
        if (typeof name == 'object') {
            for (var i = 0; i < name.length; i++) {
                if (nameList.indexOf(name[i]) > -1) {
                    return true
                }
            }
        } else if (typeof name == 'string') {
            if (nameList.indexOf(name) > -1) {
                return true
            }
        }
        return false
    },
    /**
     *   查看或下载PDF
     *   该查看或下载请使用a标签
     *   url：pdf的路径
     *   txt: 当前标签定义的id
     */
    viewOrDownPDF: function (url, txt) {
        var odownLoad = document.getElementById(txt);
        var browserType = utils.myBrowser();
        if (browserType === "IE" || browserType === "Edge") {
            //IE
            odownLoad.href = "#";
            var oImg = document.createElement("img");
            oImg.src = url;
            oImg.id = "downImg";
            var odown = document.getElementById("down");
            odown.appendChild(oImg);
            utils.SaveAs5(document.getElementById('downImg').src)
        } else {
            //!IE
            odownLoad.href = url;
            odownLoad.download = "";
        }
    },
    myBrowser: function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (userAgent.indexOf("Opera") > -1) {
            return "Opera"
        }
        ; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }
        ; //判断是否IE浏览器
        if (userAgent.indexOf("Trident") > -1) {
            return "Edge";
        } //判断是否Edge浏览器
    },
    SaveAs5: function (imgURL) {
        var oPop = window.open(imgURL, "", "width=1, height=1, top=5000, left=5000");
        for (; oPop.document.readyState != "complete";) {
            if (oPop.document.readyState == "complete") break;
        }
        oPop.document.execCommand("SaveAs");
        oPop.close();
    },
    /**
     *   时间转换
     *   date：
     */
    changeTime(date) {
        if (date) {
            date = new Date(date);
            //一天的时间戳
            let oneDay = 86400000;
            //今天0点时间戳
            let temp = new Date();
            temp.setHours(0)
            temp.setMinutes(0)
            temp.setSeconds(0)
            temp.setMilliseconds(0)
            let today = temp.getTime();
            let lessThanTen = date.getHours() + ':0' + date.getMinutes();
            let moreThanTen = date.getHours() + ':' + date.getMinutes();
            if (date.getTime() > today) {
                if (date.getMinutes() < 10) {
                    return lessThanTen;
                } else {
                    return moreThanTen;
                }
            }
            if (date.getTime() < today && date.getTime() > today - oneDay) {
                if (date.getMinutes() < 10) {
                    return '昨天' + " " + lessThanTen;
                } else {
                    return '昨天' + " " + moreThanTen;
                }
            }
            if (date.getTime() < today - oneDay && date.getTime() > today - oneDay * 2) {
                if (date.getMinutes() < 10) {
                    return '前天' + " " + lessThanTen;
                } else {
                    return '前天' + " " + moreThanTen;
                }
            }
            if (date.getTime() < today - oneDay * 2 && date.getTime() > today - oneDay * 6) {
                switch (date.getDay()) {
                    case 1:
                        if (date.getMinutes() < 10) {
                            return '星期一' + " " + lessThanTen;
                        } else {
                            return '星期一' + " " + moreThanTen;
                        }
                        break;
                    case 2:
                        if (date.getMinutes() < 10) {
                            return '星期二' + " " + lessThanTen;
                        } else {
                            return '星期二' + " " + moreThanTen;
                        }
                        break;
                    case 3:
                        if (date.getMinutes() < 10) {
                            return '星期三' + " " + lessThanTen;
                        } else {
                            return '星期三' + " " + moreThanTen;
                        }
                        break;
                    case 4:
                        if (date.getMinutes() < 10) {
                            return '星期四' + " " + lessThanTen;
                        } else {
                            return '星期四' + " " + moreThanTen;
                        }
                        break;
                    case 5:
                        if (date.getMinutes() < 10) {
                            return '星期五' + " " + lessThanTen;
                        } else {
                            return '星期五' + " " + moreThanTen;
                        }
                        break;
                    case 6:
                        if (date.getMinutes() < 10) {
                            return '星期六' + " " + lessThanTen;
                        } else {
                            return '星期六' + " " + moreThanTen;
                        }
                        break;
                    case 0:
                        if (date.getMinutes() < 10) {
                            return '星期日' + " " + lessThanTen;
                        } else {
                            return '星期日' + " " + moreThanTen;
                        }
                        break;
                }
            }
            if (date.getTime() < today - oneDay * 6) {
                if (date.getMinutes() < 10) {
                    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + lessThanTen;
                } else {
                    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + moreThanTen;
                }
            }
        }
    },
    /**
     *   上传校验
     *   file：上传的文件
     *   index: 需要校验类型传入参数的个数
     *   n个type：需要校验的类型
     *   注：传入参数可以传入多个需要校验的类型，即传入参数可以超过两个
     */
    uploadTypecheck(file, index) {
        let endNames = []
        let mimeTypes = []
        for (let i = 0; i < index; i++) {
            if (typeof arguments[i + 2] == 'object') {
                for (let key in arguments[i + 2]) {
                    endNames.push(arguments[i + 2][key].split(';')[0])
                    mimeTypes.push(arguments[i + 2][key].split(';')[1])
                }
            } else if (typeof arguments[i + 2] == 'string') {
                endNames.push(arguments[i + 2].split(';')[0])
                mimeTypes.push(arguments[i + 2].split(';')[1])
            }
        }
        let fileEndName = file.name.split('.')[1].toLowerCase()
        if (file.name.split('.').length !== 2 || !utils.arrayIsContain(fileEndName, endNames)
            || !utils.arrayIsContain(file.type, mimeTypes)) {
            return false
        }
        return true
    },
    /**
     *   根据key值获取map中的value值
     *   key：需要获取的key值
     *   map：存放json的数组
     */
    getValueByKey(key,map){
        let value = ''
        for(let keyTmp in map){
            if(key === keyTmp){
                value = map[keyTmp]
            }
        }
        return value
    },

    /**
     *  退出操作清除缓存
     *  val: '401'时只清缓存不调用后端删token； 否则删除token
     */
    logoutDelSSH: function (val) {
        if (val == 401) {
            utils.delSSH();
        } else if (router.currentRoute.name != 'login' && SSH.getItem('token')) {
            del(apiUrl.user.getLogoutUrl, {
                access_token: SSH.getItem('token')
            })
                .then((response) => {
                    utils.delSSH();
                })
        }
    },
    /**
     *  登录后调用接口封装
     */
    loginCtrl(data){
        SSH.setItem('token', data.access_token)
        SSH.setItem('userInfo', data.esspUserLoginVo)
        LSH.setItem('userInfo', data.esspUserLoginVo);
        SSH.setItem('freezeFlag', data.freeze)
        SSH.delItem('menuList')
        SSH.setItem('menuList', data.menuList)
        SSH.setItem('localAddr', data.localAddr)
        setTimeout(function () {
            SSH.setItem('menuResource', data.routerResMap)
            SSH.delItem('menuResourceTmp')
            SSH.setItem('menuResourceTmp', utils.getMenuResource(data.menuList))
            store.state.chat.user = data.esspUserLoginVo;
            SSH.setItem('cstBscInfVo', data.cstBscInfVo)
            // -聊天处理
            // self.getChatData();

            if (data.esspUserLoginVo.userType !== '01') {
                SSH.setItem('loginFlag', true)
                // 进行个人实名认证判断
                // -1：异常   0：未认证   >1：已认证    2：认证开通  3：审核开通  4：刷脸认证开通
                let userAuthFlagTmp = parseInt(data.userAuthFlag)
                if (userAuthFlagTmp > 1) {
                    SSH.setItem('cetificateFlag', true)
                } else if (userAuthFlagTmp === 0) {
                    Message.info('该用户未进行实名认证')
                    SSH.setItem('cetificateFlag', false)
                } else if (userAuthFlagTmp === 1) {
                    Message.info('该用户个人实名认证中')
                    SSH.setItem('cetificateFlag', false)
                } else {
                    Message.info('该用户实名认证异常')
                    SSH.setItem('cetificateFlag', false)
                }
                // 进行企业实名认证判断
                //  -1：异常   0：未认证   1：认证中    2：已认证通过  3：已认证不通过
                let entAuthFlagTmp = parseInt(data.entAuthFlag)
                if (entAuthFlagTmp === 2) {
                    SSH.setItem('enterpriseFlag', true)
                } else {
                    SSH.setItem('enterpriseFlag', false)
                }
            } else {
                SSH.setItem('loginFlag', true)
                SSH.setItem('cetificateFlag', true)
                SSH.setItem('enterpriseFlag', true)
            }
        }, 10)
    },
    /**
     *  清除缓存
     */
    delSSH: function () {
        // -聊天工具数据清理
        store.state.chat.openChat = false;
        store.state.chat.chatlist = [];
        store.state.chat.selectId = '';
        store.state.chat.selectConsultId = '';
        store.state.chat.chatType = '';
        store.state.chat.consultlist = [];
        store.state.chat.friendlist = [];
        store.state.chat.selectConsultList = [];
        store.state.chat.selectCard = 1;
        store.state.chat.openDetail = false;
        store.state.chat.selectFriendId = '';
        try {
            store.state.chat.ws.close();
        } catch (e) {
        }
        SSH.delItem('friendList');
        SSH.delItem('messageList');
        SSH.delItem('consultList');
        SSH.delItem('token')
        SSH.delItem('userInfo')
        SSH.delItem('token')
        SSH.delItem('freezeFlag')
        SSH.delItem('localAddr');
        SSH.delItem('menuList')
        SSH.setItem('menuList', SSH.getItem('initMenuList'))
        setTimeout(function () {
            SSH.delItem('menuResource')
            SSH.setItem('menuResource', SSH.getItem('initMenuResource'))
            SSH.delItem('menuResourceTmp')
            SSH.setItem('menuResourceTmp', utils.getMenuResource(SSH.getItem('initMenuList')))
            SSH.setItem('menuResource', SSH.getItem('initMenuResource'))
            SSH.delItem('loginFlag')
            SSH.delItem('cetificateFlag')
            SSH.delItem('enterpriseFlag')
            SSH.delItem('grayFlag')
            SSH.delItem('tagHuan')  // 删除薪资福利的缓存标识
            // 删除精准扶贫现有导航信息
            SSH.delItem('jzfpNav');
            // 删除精准扶贫当前发布方发布人信息
            SSH.delItem('jzfpSSH')
            // Message.info('退出登录成功')
            router.push({
                path: '/userIndex/login',
            });
        }, 10)
    },
    /**
     *  比较菜单id，获取菜单层级
     */
    compareId(id, menuList) {
        for (let i = 0; i < menuList.length; i++) {
            if (id == menuList[i].id) {
                return i
            }
        }
        return null
    },
    /**
     *  将菜单转为权限json格式
     */
    getMenuResource(menuList) {
        var allMenuData = {}
        for (let i = 0; i < menuList.length; i++) {
            allMenuData[menuList[i].name] = menuList[i]
            if (!utils.isEmpty(menuList[i].children) && menuList[i].children.length > 0) {
                utils.getMenuResourceChild(menuList[i].children, allMenuData)
            }
        }
        return allMenuData
    },
    getMenuResourceChild(childData, allMenuData) {
        for (let i = 0; i < childData.length; i++) {
            allMenuData[childData[i].name] = childData[i]
            if (childData[i].children) {
                utils.getMenuResourceChild(childData[i].children, allMenuData)
            }
        }
        return allMenuData
    },
}
export default utils
