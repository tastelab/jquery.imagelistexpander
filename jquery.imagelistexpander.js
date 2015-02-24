/**
 * by Wani(me@wani.kr)
 */
;(function(global, factory){
    if ( typeof define === 'function' && define.amd ) {
        define(['jquery'], factory);
    }
    else {
        factory(jQuery);
    }
})(this, function($) {
    var defaultSettings = {
        prefix: "imagelistexpander-"
    };
    var imageListExpander = function(list, _settings) {
        var
        settings = $.extend({}, defaultSettings, _settings),
        $list = $(list),
        $items = $list.find('.'+ settings.prefix +'item'),
        $trigger = $list.find('.'+ settings.prefix +'trigger'),
        $closeTrigger = $list.find('.'+ settings.prefix +'trigger-close'),

        initialize = function() {
            $items.each(function() {
                var $item = $(this);
                $item.data('height', $item.height());
            });
            // bind events
            $trigger.bind('click', clickItem);
            $closeTrigger.bind('click', clickCloseTrigger);
        },
        clickItem = function() {
            var $item = $(this).parents('.'+ settings.prefix +'item');

            if ($item.hasClass('active')) {
                hideItems($item);
            } else {
                showItem($item);
                hideItems($item.siblings());                
            }
        },
        clickCloseTrigger = function() {
            hideItems($items);
        },
        showItem = function($targetItem) {
            var
            $expanderContents = $targetItem.find('.'+ settings.prefix +'expander-contents'),
            $expander = $targetItem.find('.'+ settings.prefix +'expander'),

            itemHeight = $targetItem.data('height'),
            expanderHeight = $expanderContents.outerHeight();

            $targetItem.addClass('active').css('height', itemHeight + expanderHeight);
            $expander.css('max-height', expanderHeight + 50);
        },
        hideItems = function($targetItems) {
            $targetItems = $targetItems.filter('.active');
            var $expanders = $targetItems.find('.'+ settings.prefix +'expander');

            $targetItems.each(function() {
                var $elem = $(this);
                $elem.css('height', $elem.data('height'));
            });

            $targetItems.removeClass('active');
            $expanders.css('max-height', 0);
        };

        initialize();
    };

    $.fn.imagelistexpander = function(settings) {
        $(this).each(function() {
            imageListExpander(this, settings || {});
        });
    };

    return $;
});