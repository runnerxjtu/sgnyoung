(function($) {
  $(document).ready(function() {
    function initComparision(imgClass) {
      var img = $(imgClass);
      (imgWidth = img.width()),
        (imgHeight = img.height()),
        (clicked = 0),
        (win = $(window)),
        (imgOffset = img.offset());

      img.css({
        width: 400
      });

      var slider = $("<div></div>", {
        class: "comp-slider"
      }).prependTo($(".comp-container"));

      var sliderWidth = slider.width();

      slider.css({
        left: imgWidth / 2 - sliderWidth / 2 + "px",
        top: imgHeight / 2 - sliderWidth / 2 + "px"
      });

      slider.on("mousedown", slideReady);
      win.on("mouseup", slideFinish);

      function slideReady(e) {
        e.preventDefault();
        clicked = 1;

        win.on("mousemove", function(e) {
          if (clicked == 0) {
            return false;
          }

          var x = e.pageX - imgOffset.left;

          if (x < 0) x = 0;
          if (x > imgWidth) x = imgWidth;

          img.css({
            width: x + "px"
          });

          slider.css({
            left: img.width() - sliderWidth / 2 + "px"
          });
        });
      }

      function slideFinish() {
        clicked = 0;
      }
    }

    initComparision(".comp-overlay");
  });
})(jQuery);