$(document).ready(function() {
  $("winui-button").replaceWith(function() {
    console.log($("<button />", { html: $(this).attr("content") }));
    return $("<button />", {
      html: "<span>" + "<span class=\"icon\">" + $(this).attr("Icon") + "</span>" + $(this).attr("content") + "</span>", id: $(this).attr("name")
    }).addClass("winui-button " + $(this).attr("winui-style"));
  });
  $("winui-textblock").replaceWith(function() {
    return $("<div />", {
      html: $(this).attr("Text"), id: $(this).attr("name")
    }).addClass($(this).attr("winui-style"));
  });
});