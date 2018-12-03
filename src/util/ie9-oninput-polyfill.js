// 修复el-input在IE9下退格删除不了model值问题
document.addEventListener('selectionchange', () => {
    if (navigator.userAgent.indexOf('MSIE 9') === -1) return;

    var el = document.activeElement;
    if (el && (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.type === 'text'))) {
        const e = document.createEvent('HTMLEvents')
        e.initEvent("input", true, true)
        el.dispatchEvent(e)
    }
});