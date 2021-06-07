import React, { useRef, useEffect } from "react";
import * as d3 from "d34"; //d3.js 4.0.0

const ShapeDrag = ({ width, height, numCircles, numBoxes, setAnswer }) => {
  const d3Drag = useRef();
  useEffect(() => {
    var svg = d3
      .select(d3Drag.current)
      .attr("width", width)
      .attr("height", height);

    var box_count = numBoxes;
    var xbox = width / 2;
    var ybox = 0;
    var boxwidth = width / 2;
    var boxheight = height / box_count;

    var box_data = d3.range(box_count).map(function () {
      ybox += boxheight;
      return { x: xbox, y: ybox - boxheight };
    });

    var boxes = d3
      .select("svg")
      .append("g")
      .attr("class", "rect")
      .selectAll("rect")
      .data(box_data)
      .enter()
      .append("rect")
      .attr("x", (d) => {
        return d.x;
      })
      .attr("y", (d) => {
        return d.y;
      })
      .attr("width", boxwidth)
      .attr("height", boxheight)
      .attr("fill", "#0aa286")
      .attr("fill-opacity", 0.3)
      .attr("stroke", "teal")
      .attr("stroke-width", 4);

    var circle_count = numCircles;
    var radius = 20;
    var xval = width / 4;
    var yval = height / 2;
    var cid = 0;
    var circle_data = d3.range(circle_count).map(function () {
      cid++;
      return {
        x: xval,
        y: yval,
        id: cid,
      };
    });

    //add svg circles
    var circles = d3
      .select("svg")
      .append("g")
      .attr("class", "circles")
      .selectAll("circle")
      .data(circle_data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("id", function (d) {
        return d.id;
      })
      .attr("r", radius)
      .attr("fill", "#a6ffef")
      .attr("stroke", "teal")
      .style("stroke-width", 3)
      .call(
        d3
          .drag() // call specific function when circle is dragged
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    var simulation = d3
      .forceSimulation()
      .force(
        "collide",
        d3.forceCollide().strength(0.1).radius(20).iterations(1)
      );

    simulation.nodes(circle_data).on("tick", function (d) {
      circles
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0.03);
      d.fx = coord(d.fx, 0, width);
      d.fy = coord(d.fy, 0, height);
      setAnswer(cinb());
    }

    function coord(h, i, j) {
      if (h < i) {
        return i + radius;
      } else if (h > j) {
        return j + radius;
      } else {
        return null;
      }
    }

    function cpos() {
      const circleids = circles._groups[0].map((circle) => {
        return { x: circle.__data__.x, y: circle.__data__.y };
      });
      return circleids;
    }

    function cinb() {
      var dict = {};
      for (var i = 1; i <= box_count; i++) {
        dict[i] = 0;
      }

      var cparr = cpos();
      for (let circle of cparr) {
        if (circle.x > xbox) {
          for (let i = 0; i < box_count; i++) {
            if (circle.y > boxheight * i && circle.y < boxheight * (i + 1)) {
              dict[i + 1]++;
              break;
            }
          }
        }
      }
      return dict;
    }
  }, [setAnswer]);

  return (
    <div>
      <svg ref={d3Drag}></svg>
    </div>
  );
};

export default ShapeDrag;
