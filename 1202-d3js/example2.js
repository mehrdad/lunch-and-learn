var data = d3.range(4);
var demo = d3.selectAll("#example2 .demo");
// =begin
var v = demo.selectAll("span").data(data).enter()
  .append("span")
  .append("svg")
    .attr("width", 30)
    .attr("height", 24)
  .append("text")
    .attr("x", "15px").attr("dy", "23px")
    .attr("text-anchor", "middle")
    .attr("fill", "none").attr("stroke", "yellow")
    .attr("stroke-width", 1.5)
    .style("font", "22pt Comic Sans MS")
    .text(function(d) { return d; });
// onclick (see example2.js for more details):
// demo.selectAll("text").data(data).text(function(d) { return d; };
// =end
demo.append("a").attr('href', location.href).text("↺")
// OR demo.selectAll('a').data(['↺']).enter().append("a").text(String)
  .attr("style", "margin-left:1em")
  .on("click", function() {
    var pool = d3.range(10);
    data.forEach(function(d,i){
      data[i] = pool.splice(Math.floor(Math.random()*pool.length),1)
    });
    demo.selectAll("text").data(data).text(function(d) { return d; }); 
    // Can you do sort here as in example 1? :-)
//    d3.event.stopPropagation();
//    d3.event.preventDefault();
  });
  

