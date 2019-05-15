class Billboard {
    // 构造
    constructor() {
        // 初始化
        this.init();
    }

    // 初始化
    init() {
        // 初始化事件
        this.initEvent();
    }

    initEvent() {
        const $layer = $('.layer');

        // 显示弹窗
        $('.billboard__banner--rule').click(() => {
            $layer.show();
        });

        // 关闭弹窗
        $('.close-icon, .layer').click((e) => {
            if (e.target !== e.currentTarget) return;
            e.stopPropagation();
            $layer.hide();
        });

        // 阻止弹窗穿透
        $layer.on('touchmove', e => e.preventDefault());
    }
}

$(() => {
    new Billboard();
});
