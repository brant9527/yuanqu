import uploadType from './uploadType.js'
const constants = {
    // 允许授权访问的页面
    'authName': [
        // 基础配置
        'home', // 首页
        'login', // 登录页
        'forgetPwd', // 忘记密码
        'register', // 注册
        'help-topic', //深圳专题        //  本地临时配置(此处只用于本地临时测试，不可上传文件，
        // 当后端将数据插入数据库后，删除此处记录，正常调试
    ],
    // 从其他平台跳转过来设值
    'srcCode': [
        'APP_001', // 政务云
    ],
    // 冻结账户的url数组
    'urlList': [
        '/commodity/submit',// 发布商品
        '/commodity/del',//商品删除
        '/commodity/sale',//商品上/下架
        '/requirement/requirement_send_intention',//发送意向
        '/requirement/pulish/addOrUpdate',//需求发布
        '/requirement/abate',//需求下架
        '/requirement/requirement_modify',//需求编辑
        '/requirement/updateRequire',//删除需求
        '/goods/goods_submit',//创建服务
        '/goods/goods_del',//服务删除
        '/goods/goods_sale',//服务上架下架
        '/goods/goods_edit',//编辑服务
        '/activity/addActivity',  // 发布活动接口
        "/activity/delActivity",//删除活动
        "/attention/removeAttention",//取消关注
        "/enterinfo/addEnterinfo",  // 添加报名活动
        "/information/delBatchInfo",//删除资讯草稿（批量和单条删除）
        "/information/saveInformation",//发布资讯
        "/information/addMyFocus",//添加关注资讯
        "/information/cancelFollInfo",//取消关注资讯
        "/comment/addComment",  // 添加评论
        "/comment/addReply",  // 添加回复
        "/comment/delReply",   // 删除回复
    ],
    // 忽略进度显示URL（主要用于定期执行URL）
    'ignoreProcessUrl': [
        "/messageBuyer/unReadByLastMin"
    ],
    // 上传文件类型
    'uploadType': uploadType,
}


export default constants
