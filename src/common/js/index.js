$(function() {

    // 左侧滚动判断
    var $left = $('#left'), // 左边div
        $leftContent = $left.children(), // 左边div的内容
        docHeight = $(document).height(), // 文档高度
        isSmallScreen = false, // 是否是小屏幕，此时不需要计算位置
        isCenter = false; // 是否已经居中

    // 菜单
    var $nav = $('#nav'), // navBox
        $navHandle = $('.nav-handle'); // 小屏幕触发组件

    /**
     * 窗口大小调整时，判断是否是小屏幕
     * 根据页面元素的定位属性判断
     */
    $(window).on('resize', wait(200, function() {
        isSmallScreen = 'fixed' != $left.css('position')
    })).trigger('resize');

    /**
     * 页面滚动时判断位置
     */
    $(window).on('scroll', wait(200, function() {
        // 小屏幕
        if (isSmallScreen) return;
        // 如果屏幕过小，则不必执行以下操作
        // 判断left-content 是否完全显示
        if ($left.height() < $leftContent.height()) {
            // 没有完全显示
            // 页面滚动的距离 / 页面超出的距离 = left-content移动的距离 / left-content超出的距离
            var docOffsetY = docHeight - $(window).height(), // 文档超出的高度
                contentOffsetY = $leftContent.height() - $left.height(), // 左侧内容超出的高度
                contentOffsetTop = $(window).scrollTop() / docOffsetY * contentOffsetY; // 左侧内容需要调整的高度
            // 调整高度
            $leftContent.animate({
                top: -contentOffsetTop
            });
        } else {
            // 将左侧内容区域垂直居中,保证只操作一次
            if (isCenter) return;
            $leftContent.css('top', ($left.height() - $leftContent.height()) / 2);
            isCenter = true;
        }
    })).trigger('scroll');

    /**
     * 函数节流
     * @param {number} time 保持时间
     * @param {function} fn 回调函数
     * @return {Function}
     */
    function wait(time, fn) {
        var timer = null;
        return function() {
            clearTimeout(timer);
            timer = setTimeout(fn, time);
        }
    }

    // 屏幕变化时的菜单处理
    $(window).on('scroll', function() {
        var offsetTop = $(window).scrollTop();
        // 小屏幕，调整菜单的位置
        if (isSmallScreen) {
            if (offsetTop - $left.innerHeight() >= 0) {
                $nav.css('position', 'fixed');
            } else {
                $nav.css('position', 'absolute')
            }
        } else {
            // 大屏幕
            $nav.css({
                top: offsetTop
            });
        }
    });


    // 点赞动画
    var $starHandle = $('#star-handle'),
        $star = $('#star');
    $starHandle.on('click', function() {
        if ($star.isStared) {
            $star.removeClass('stared star-end');
            $star.isStared = false;
        } else {
            $star.addClass('stared star-end');
            $star.isStared = true;
        }
    });
});