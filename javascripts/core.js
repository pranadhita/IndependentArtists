$(document).ready(function () {
    // open external link in new tab/window
    // use rel="external" instead of target="_blank"
    $('a[rel="external"]').click(function () {
        this.target = "_blank";
    });

    //CLICKABLE LI
    //if you have a list item and you need the each of the whole li's to link to a url, use this.
    //This will grab the first <a> tag (inside the selected li) and use it as the location to open (on li click).
    $("ul.clickable_li li").each(function () {
        var link = $(this).find("a").attr("href")

        if (link) {
            $(this).addClass("pointer")
            $(this).bind('click', function () { window.location = link });
        }
    });

    //CUSTOM SCROLLER
    $(window).load(function () {
        $("#mcs_container").mCustomScrollbar("vertical", 400, "easeOutCirc", 1.05, "auto", "yes", "yes", 10);
    });

    //FancyBox youtube
    $(".youtube").click(function () {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'overlayColor': '#000',
            'width': 680,
            'height': 495,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });
        return false;
    });

    //EMAIL REPLACEMENT
    $("span.safemail").each(function () {
        exp = $(this).text().search(/\((.*?)\)/) != -1 ? new RegExp(/(.*?) \((.*?)\)/) : new RegExp(/.*/);
        match = exp.exec($(this).text());
        addr = match[1] ? match[1].replace(/ at /, "@").replace(/ dot /g, ".") : match[0].replace(/ at /, "@").replace(/ dot /g, ".");
        emaillink = match[2] ? match[2] : addr;
        subject = $(this).attr('title') ? "?subject=" + $(this).attr('title').replace(/ /g, "%20") : "";
        $(this).after('<a href="mailto:' + addr + subject + '">' + emaillink + '</a>');
        $(this).remove();
    });
    $("input.safemail").each(function () {
        $(this).val($(this).val().replace(/ at /, "@").replace(/ dot /g, "."));
    });

    //VALIDATION
    $("#form").validationEngine('attach');

    // COMEDIANS PAGE
    // title on hover
    $('body#p-comedians .listing a').hover(function () {
        Cufon.refresh();
    }, function () {
        Cufon.refresh();
    });

    // COMEDIAN DETAIL
    // prettyPhoto plugin for YOUTUBE vids
    $("body#p-comedians #content.detail .links a[rel^='prettyPhoto']").prettyPhoto();
	$('.twitter.popup').click(function (event) {
		var width = 575,
        height = 400,
        left = ($(window).width() - width) / 2,
        top = ($(window).height() - height) / 2,
        url = this.href,
        opts = 'status=1' +
                    ',width=' + width +
                    ',height=' + height +
                    ',top=' + top +
                    ',left=' + left;
		window.open(url, 'twitter', opts);
		return false;
	});
});

function checkHELLO(field, rules, i, options){
    if (field.val() != "HELLO") {
        // this allows to use i18 for the error msgs
        return options.allrules.validate2fields.alertText;
    }
}

// jquery.input_replacement.js by Dana Woodman
//Replaces default input text.
(function($) {
    $.fn.input_replacement = function(options) {
        // Compile default options and user specified options.
        var opts = $.extend({}, $.fn.input_replacement.defaults, options);
        return $(this).each(function() {
            var obj = $(this);
            // Build element specific options.
            obj.o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            // If field is empty, append text, classes, etc...
            if (obj.val() == '') {
                obj.val(obj.o.text);
                if (obj.o.empty_class) {
                    obj.addClass(obj.o.empty_class);
                };
                // Focus on the input has occurred.
                obj.bind('focus', function() {
                    if (obj.val() == obj.o.text) {
                        obj.val('');
                    };
                    if (obj.o.empty_class) {
                        obj.removeClass(obj.o.empty_class);
                    };
                });
                // Focus has been lost.
                obj.bind('blur', function() {
                    if (obj.val() == '') {
                        obj.val(obj.o.text);
                        if (obj.o.empty_class) {
                            obj.addClass(obj.o.empty_class);
                        };
                    };
                });
                // Clear out the values on reload so they arent loaded after refresh.
                $(window).unload(function() {
                   if (obj.val() == obj.o.text) {
                       obj.val('');
                   }; 
                });
                // If nothing was entered, make sure the "text" is not submitted by removing it.
                var form = obj.parents('form'); //.map(function () { return this.tagName; }).get().join(", ");
                if (form) {
                    form.find("input[type=submit]").each(function() {
                        $(this).bind('click', function() {
                            if (obj.val() == obj.o.text) {
                                obj.val('');
                            };
                        });
                    });
                };
            };
        });
    };

    $.fn.input_replacement.defaults = {
        text: '', // The text to put in the empty input field.
        empty_class: '' // A class to be applied to empty input field. Gets removed after 'focus'.
    };

})(jQuery);