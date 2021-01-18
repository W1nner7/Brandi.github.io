$(document).ready(function () {
  $(".works__list-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".works__gallery-item").show("1000");
    } else {
      $(".works__gallery-item")
        .not("." + value)
        .hide("1000");
      $(".works__gallery-item")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".works__list-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
