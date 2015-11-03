var kraut = {
    init: function(options, elem) {
        this.options = $.extend({}, this.options, options);
        this.elem = elem;
        this.$elem = $(elem);
        this.debugLevel = debugLevel;
        this._build();
        return this;
    },
    options: {
        timelineURL: ""
    },
    _build: function() {

    },
    _loadData: function(){
        $.getJSON(this.timelineURL, function(){

        });
    },
    dataset
};
if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        function F() {} // optionally move this outside the declaration and into a closure if you need more speed.
        F.prototype = o;
        return new F();
    };
}
(function($) {
    // Start a plugin
    $.fn.kraut = function(options) {
        if (this.length) {
            return this.each(function() {
                var kraut = Object.create(kraut);
                kraut.init(options, this); // `this` refers to the element
                $.data(this, 'kraut', kraut);
            });
        }
    };
})(jQuery);

$(document).ready(function() {
     $("#kraut").kraut();
});
