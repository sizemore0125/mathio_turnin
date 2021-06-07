import React, { useRef, useEffect } from "react";
import * as d3 from "d33"; //d3.js 3.5.5
import "../styles/clock.css";

const Clock = ({ setMinute, setHour }) => {
  const d3Clock = useRef();
  useEffect(() => {
    var amtPerSec = 3075.64;

    var margin = {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40,
    };

    var radians = 0.0174532925;

    var r = 200;
    // How far out the second labels and hour labels are (second radius, hour radius)
    var secR = r + 16;
    var hourR = r - 40;

    var hourHandLength = (2 * r) / 3;
    var minuteHandLength = r;
    var secondHandLength = r - 12;
    var hour = 12; // Stores the hour value (1-12) ex: if clock is set to 12:55, will store 12
    var m = 0; // Stores the minute value (0-59) ex: if clock is set to 12:55, will store 55

    var w = 450;
    var h = 450;

    var minuteScale = d3.scale.linear().range([0, 354]).domain([0, 59]);

    var hourScale = d3.scale.linear().range([0, 330]).domain([0, 11]);

    var drag = d3.behavior
      .drag()
      .on("dragstart", dragstart)
      .on("drag", drag)
      .on("dragend", dragend);

    var handData = [
      {
        type: "hour",
        value: 0,
        length: -hourHandLength,
        scale: hourScale,
      },
      {
        type: "minute",
        value: 0,
        length: -minuteHandLength,
        scale: minuteScale,
      },
    ];

    function updateData() {
      var t = new Date();
      handData[0].value = (t.getHours() % 12) + t.getMinutes() / 60;
      handData[1].value = t.getMinutes();
    }

    updateData();

    var svg = d3
      .select(d3Clock.current)
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom);

    var g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var face = g
      .append("g")
      .attr("transform", "translate(" + r + "," + r + ")");

    face.append("circle").attr({
      class: "outline",
      r: r,
      cx: 0,
      cy: 0,
      fill: "#0aa286",
    });
    //Sets up hash marks for minute
    face
      .selectAll(".second")
      .data(d3.range(0, 60))
      .enter()
      .append("line")
      .attr({
        class: "second",
        x1: 0,
        x2: 0,
        y1: r,
        y2: r - 10,
        transform: function (d) {
          return "rotate(" + minuteScale(d) + ")";
        },
      });
    //Sets up labels for seconds
    face
      .selectAll(".minute-label")
      .data(d3.range(5, 61, 5))
      .enter()
      .append("text")
      .classed(".minute-label", true)
      .text(function (d) {
        return d;
      })
      .attr({
        "text-anchor": "middle",
        x: function (d) {
          return secR * Math.sin(minuteScale(d) * radians);
        },
        y: function (d) {
          return -secR * Math.cos(minuteScale(d) * radians) + 8;
        },
        fill: "white",
      });
    //Sets up hour hash marks
    face
      .selectAll(".hour")
      .data(d3.range(0, 12))
      .enter()
      .append("line")
      .attr({
        class: "hour",
        x1: 0,
        x2: 0,
        y1: r,
        y2: r - 20,
        transform: function (d) {
          return "rotate(" + hourScale(d) + ")";
        },
      });
    //Sets up hour labels
    face
      .selectAll(".hour-label")
      .data(d3.range(3, 13, 3))
      .enter()
      .append("text")
      .text(function (d) {
        return d;
      })
      .attr({
        class: "hour-label",
        "text-anchor": "middle",
        x: function (d) {
          return hourR * Math.sin(hourScale(d) * radians);
        },
        y: function (d) {
          return -hourR * Math.cos(hourScale(d) * radians) + 9;
        },
        fill: "white",
        "font-size": 20,
      });

    var hands = face.append("g");

    hands
      .selectAll("line")
      .data(handData)
      .enter()
      .append("line")
      .attr({
        class: function (d) {
          return d.type + "-hand";
        },
        x1: 0,
        y1: 0,
        x2: 0,
        y2: -r,
      })

      .call(drag);

    // small circle in middle to cover hands
    face.append("circle").attr({
      cx: 0,
      cy: 0,
      r: 15,
      fill: "white",
      stroke: "#374140",
      "stroke-width": 3,
    });

    function dragstart() {}

    function drag() {
      var rad = Math.atan2(d3.event.y, d3.event.x); // This gives us theta (angle of the clock hand in radians)

      d3.select(this).attr({
        x2: function (d) {
          return r * Math.cos(rad); //calculating x coordinate (where endpoint of hand not at 0,0 is on clock)
        },
        y2: function (d) {
          return r * Math.sin(rad); //calculating y coordinate (where endpoint of hand not at 0,0 is on clock)
        },
      });

      var t;
      if (Object.values(d3.select(this).data()[0])[0] == "hour") {
        t = "h";

        hour = getnum(t, rad);
        setHour(hour);
      } else {
        t = "m";
        m = getnum(t, rad);
        setMinute(m);
      }
    }

    function dragend() {}
    //Returns the numeric value the clock is pointing to
    function getnum(t, r) {
      var n = r / Math.PI;
      if (n < 0) {
        n = 1 - n * -1 + 1;
      }
      n = n + 0.5;
      // hour hand
      if (t == "h") {
        if (n > 2 + 1 / 6) {
          n = n - 2;
        }
        n = Math.floor(n * 6);
      }
      // minute hand
      else if (t == "m") {
        if (n >= 2) {
          n = n - 2;
        }
        n = Math.round(n * 30);
        if (n == 60) {
          n = 0;
        }
      }
      return n;
    }
  }, [setMinute, setHour]);

  return (
    <div>
      <svg ref={d3Clock}></svg>
    </div>
  );
};
export default Clock;
