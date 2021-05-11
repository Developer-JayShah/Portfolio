
let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.95,
  fill: {gradient: ['#a445b2', '#fa4299']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".cs .bar").circleProgress({
  value: 0.90
});
$(".js .bar").circleProgress({
  value: 0.60
});
$(".jq .bar").circleProgress({
  value: 0.65
});
$(".boot .bar").circleProgress({
  value: 0.75
});
$(".sa .bar").circleProgress({
  value: 0.80
});
$(".sql .bar").circleProgress({
  value: 0.65
});
$(".en .bar").circleProgress({
  value: 0.65
});
$(".c .bar").circleProgress({
  value: 0.75
});