// DOM element where the Timeline will be attached
const container = document.getElementById("visualization");
//  Create a Timeline
const timeline = new vis.Timeline(container, items, options);

$(document).ready(function() {
  //  click function for timeline

  $("div.vis-item").click(function() {
    $("div.vis-selected").toggleClass("vis-item-custom");
  });
});