const uploadType = {
    // 图片类型
    image: {
        'jpeg': 'jpeg;image/jpeg',
        'jpg': 'jpg;image/jpeg',
        'jpe': 'jpe;image/jpeg',
        'png': 'png;image/png',
        'bmp': 'bmp;image/bmp',
        'gif': 'gif;image/gif',
        // 'ico': 'ico;image/x-icon',
    },
    // pdf
    pdf: {
        'pdf': 'pdf;application/pdf',
    },
    // word
    word: {
        'doc': 'doc;application/msword',
        // 'dot': 'dot;application/msword',
        'docx': 'docx;application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
    // excel
    excel: {
        'xls': 'xls;application/vnd.ms-excel',
        // 'xlm': 'xlm;application/vnd.ms-excel',
        // 'xla': 'xla;application/vnd.ms-excel',
        // 'xlc': 'xlc;application/vnd.ms-excel',
        // 'xlt': 'xlt;application/vnd.ms-excel',
        // 'xlw': 'xlw;application/vnd.ms-excel',
        'xlsx': 'xlsx;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    // ppt
    ppt: {
        'ppt': 'ppt;application/vnd.ms-powerpoint',
        // 'pps': 'pps;application/vnd.ms-powerpoint',
        // 'pot': 'pot;application/vnd.ms-powerpoint',
        'pptx': 'pptx;application/vnd.openxmlformats-officedocument.presentationml.presentation',
    },
    // 文本文档
    txt: {
        'txt': 'txt;text/plain',
        'text': 'text;text/plain',
        'conf': 'conf;text/plain',
        // 'def': 'def;text/plain',
        // 'list': 'list;text/plain',
        // 'log': 'log;text/plain',
        // 'in': 'in;text/plain',
    },
    // 压缩包
    rar: {
        'rar': 'rar;application/x-rar-compressed',
        'zip': 'zip;application/zip',
        'tar': 'tar;application/x-tar',
        'jar': 'jar;application/java-archive',
    },
    // 源码
    src: {
        'html': 'html;text/html',
        'htm': 'htm;text/html',
        'js': 'js;application/javascript',
        'java': 'java;text/x-java-source',
        'class': 'class;application/java-vm',
    },
    // 视频
    video:{
        'wav': 'wav;audio/x-wav',
    },

}


export default uploadType
