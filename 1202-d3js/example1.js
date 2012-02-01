var data = d3.range(4);
var demo = d3.selectAll("#example1 .demo");

demo.selectAll("span").data(data).enter()
    .append("span").attr("style", "margin:0 10px")
    .text(function(d) { return d; });

demo.append("a").attr('href', location.href).text("↺")
// OR demo.selectAll('a').data(['↺']).enter().append("a").text(String)
  .attr("style", "margin-left:1em")
  .on("click", function() {
      var pool = d3.range(10);
      data.forEach(function(d,i){
        data[i] = pool.splice(Math.floor(Math.random()*pool.length),1)
      });
      demo.selectAll("span").data(data).text(function(d) { return d; }).sort();
      return false;
    });
// =end