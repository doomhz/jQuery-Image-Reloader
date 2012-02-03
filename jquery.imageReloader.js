(function ($) {
  $.fn.imageReloader = function (options) {

    options = $.extend({}, options, {
      loadingClass: "loading-image",
      reloadTime: 1500,
      maxTries: 10
    });

    var $self = $(this);

    if ($self.length > 1) {
      $self.each(function (i, el) {
        $(el).imageReloader(options);
      });
      return $self;
    }

    $self.data("reload-times", 0);
    var imageHeight = $self.height()
    var imageWidth  = $self.width()

    var $imageReplacer = $('<div class="' + options.loadingClass + '">');
    $imageReplacer.css({height: imageHeight, width: imageWidth})
    $imageReplacer.hide();
    $imageReplacer.insertAfter($self);

    var showImage = function () {
      $self.show();
      $imageReplacer.remove();
    };

    $self.bind("error", function () {
      $self.hide();
      $imageReplacer.show()
      var reloadTimes = $self.data("reload-times");
      if (reloadTimes < options.maxTries) {
        setTimeout(function () {
          $self.attr("src", $self.attr("src"));
          var reloadTimes = $self.data("reload-times");
          reloadTimes++;
          $self.data("reload-times", reloadTimes);
        }, options.reloadTime);
      } else if (!$self.is(":visible")) {
        showImage();
        $self.attr("alt", "Image not found :(");
      }
    });

    $self.bind("load", function () {
      showImage();
    });

    return this;
  };

})(jQuery);
