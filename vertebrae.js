(function($) {
  function Vertebrae() {
    var self = this;
    
    self.fetchDatasets = function() {
      $('script[type="text/vertebrae"]').each(function(index, element) {
        var script = $(element);
        var data = $.trim(script.html());

        self[script.attr('name')] = JSON.parse(data);

        script.remove();
      });
    };
  }

  window.vertebrae = new Vertebrae();

  $(function() {
    vertebrae.fetchDatasets();
  });

})(window.jQuery);
