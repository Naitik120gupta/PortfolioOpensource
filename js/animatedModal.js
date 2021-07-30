! function(a) {
    a.fn.animatedModal = function(n) {
        var t = a(this),
            o = t.attr("href").replace("#", ""),
            i = a("#" + o).find("[data-modal-close]");
        var e = a.extend({
                modalTarget: o,
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndexIn: "9999",
                zIndexOut: "-9999",
                opacityIn: "1",
                opacityOut: "0",
                animatedIn: "fadeIn",
                animatedOut: "fadeOut",
                animationDuration: ".2s",
                beforeOpen: function() {
                    a("html").css("overflowY", "scroll"), a("html").add(i).css("marginRight", "0"), a("#" + o).css("overflowY", "hidden")
                },
                afterOpen: function() {
                    var n, t;
                    a("html").css("overflowY", "hidden"), a("html").add(i).css("marginRight", (n = a("<div>").css({
                        visibility: "hidden",
                        width: 100,
                        overflow: "scroll"
                    }).appendTo("body"), t = a("<div>").css({
                        width: "100%"
                    }).appendTo(n).outerWidth(), n.remove(), 100 - t)), a("#" + o).css("overflowY", "scroll")
                },
                beforeClose: function() {
                    a("html").css("overflowY", "scroll"), a("html").add(i).css("marginRight", "0"), a("#" + o).css("overflowY", "hidden")
                },
                afterClose: function() {}
            }, n),
            d = a(t).attr("href"),
            s = a("body").find("#" + e.modalTarget),
            l = "#" + s.attr("id");
        s.addClass("animated"), s.addClass(e.modalTarget + "-off");
        var r = {
            position: e.position,
            width: e.width,
            height: e.height,
            top: e.top,
            left: e.left,
            "z-index": e.zIndexOut,
            opacity: e.opacityOut,
            "-webkit-animation-duration": e.animationDuration,
            "-moz-animation-duration": e.animationDuration,
            "-ms-animation-duration": e.animationDuration,
            "animation-duration": e.animationDuration
        };

        function m() {
            s.css({
                opacity: e.opacityOut,
                "z-index": e.zIndexOut
            }), e.afterClose()
        }

        function f() {
            e.afterOpen()
        }
        s.css(r), t.click(function(a) {
            a.preventDefault(), d == l && (s.hasClass(e.modalTarget + "-off") && (s.removeClass(e.animatedOut), s.removeClass(e.modalTarget + "-off"), s.addClass(e.modalTarget + "-on")), s.hasClass(e.modalTarget + "-on") && (e.beforeOpen(), s.css({
                opacity: e.opacityIn,
                "z-index": e.zIndexIn
            }), s.addClass(e.animatedIn), s.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", f)))
        }), i.click(function(a) {
            a.preventDefault(), e.beforeClose(), s.hasClass(e.modalTarget + "-on") && (s.removeClass(e.modalTarget + "-on"), s.addClass(e.modalTarget + "-off")), s.hasClass(e.modalTarget + "-off") && (s.removeClass(e.animatedIn), s.addClass(e.animatedOut), s.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", m))
        })
    }
}(jQuery);