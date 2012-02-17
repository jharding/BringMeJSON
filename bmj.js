//  BringMeJSON (bmj)
//  (c) 2012 Jake Harding
//  BringMeJSON may be freely distributed under the MIT license.

/*globals console */

(function($) {
    function BringMeJSON() {
        var that = this;
        this.getJSON = function() {
            $('script[type="application/json"]').each(function() {
                var script = $(this);
                var name = script.attr('name');
                var data = $.trim(script.html());

                try {
                    that[name] = $.parseJSON(data);
                }
                catch (error) {
                    that[name] = null;

                    if (console) {
                        console.error('BMJ: The script tag \'' + name + '\' contains invalid JSON.');
                    }
                }

                script.remove();
            });
        };
    }
    
    window.bmj = new BringMeJSON();

    $(function() {
        window.bmj.getJSON();
    });

})(window.jQuery);
