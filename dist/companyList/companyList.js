/*
 * @Author: veneno.zhou
 * @Date: 2019-03-08 17:50:44
 * @Last Modified by: veneno.zhou
 * @Last Modified time: 2019-03-11 15:34:45
 */

/**
 * @class CompanyList 装修公司列表
 */
class CompanyList {
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

    // 事件绑定
    initEvent() {
        const $filterLayer = $('.filter-layer');
        const $layerChannel = $('.filter-layer__channel');

        // 遮罩层点击事件
        $filterLayer.click(function () {
            $(this).removeClass('active');
            $('.filter-nav__list--item.active').removeClass('active');
        });

        // 停止派发遮罩层事件
        $layerChannel.click((e) => {
            e.stopPropagation();
        });

        // 筛选栏点击
        $('.filter-nav__list--item').click(function () {
            const $this = $(this); // 缓存
            const index = $this.index();

            // 选中同一筛选栏 收起
            if ($this.hasClass('active')) {
                $filterLayer.removeClass('active');
            } else {
                $filterLayer.addClass('active');
                $layerChannel.eq(index).show().siblings()
                    .hide();
            }

            // 改变筛选栏的状态
            $this.toggleClass('active').siblings().removeClass('active');
        });

        // 类型单选及区域单选
        $('.type .type--item, .area .area--item').click(function () {
            const $this = $(this);
            if ($this.hasClass('active')) return;
            $this.toggleClass('active').siblings().removeClass('active');
        });

        // 更多的单选
        $('.more-channel .radio .choose--item').click(function () {
            const $this = $(this);
            if ($this.hasClass('active')) return;
            $this.toggleClass('active').siblings().removeClass('active');
        });

        // 更多筛选栏中的多选
        $('.more-channel .multiple .choose--item').click(function () {
            const $this = $(this);
            $this.toggleClass('active');
        });

        // 清空
        $('.select-button .empty').click(() => {
            $('.more-channel .choose--item').removeClass('active');
            // 选中不限
            $('.more-channel .house-type .choose--item').eq(0).addClass('active');
        });

        // 确认
        $('.select-button .confirm').click(() => {
            // 交互待确认
        });
    }
}

$(() => {
    new CompanyList();
});
