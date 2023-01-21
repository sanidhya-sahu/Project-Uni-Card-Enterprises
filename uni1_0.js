document.getElementById("wel").style.opacity="1";
document.getElementById("wel").style.filter="none";
$(window)
  .scroll(function () {
    // selectors
    var $window = $(window),
      $section = $("section"),
      $panel = $(".panel");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $section.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        $section.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();
 
// Select the target element
const targetElement = document.querySelector('.robo');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
  // Check if the target element is intersecting with the viewport
  if (entries[0].isIntersecting) {
    // Do something when the target element is in view
    // targetElement.style.opacity=1;
    entries.forEach(element => {
      element.target.classList.toggle("show",element.isIntersecting)
    });
  }
},{
  threshold: 0
}
);

// Observe the target element
observer.observe(targetElement);

