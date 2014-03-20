function particleChart() {
  return function() {
    var i = 0;
    
    var width = 1280,
        height = 720;  
    
    
    var svg = d3.select(".particle-chart").append("svg")
        .attr("class", "chart")
        .attr("width", width)
        .attr("height", height)
        .on("mousemove", mousemove);
    
    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height);
    
    function mousemove() {
        var m = d3.mouse(this);
    
        svg.insert("circle", "rect")
            .attr("cx", m[0])
            .attr("cy", m[1])
            .attr("r", 1e-6)
            .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
            .style("stroke-opacity", 1)
          .transition()
            .duration(2000)
            .ease(Math.sqrt)
            .attr("r", 100)
            .style("stroke-opacity", 1e-6)
            .remove();
        
        d3.event.preventDefault();
    }
  }
}