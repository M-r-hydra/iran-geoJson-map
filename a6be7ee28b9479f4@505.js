// https://observablehq.com/@syaleni/iran-map-geojson@505
import define1 from "./e93997d5089d7165@2303.js";

function _1(md) {
  return md`
# Iran Map GeoJSON
  `;
}

function _2(md) {
  return md`
Clickable map of Iran provinces.
  `;
}

function _3(md) {
  return md`
Reference: https://observablehq.com/@mbostock/u-s-state-map
  `;
}

function _4(md) {
  return md`
## Provinces
  `;
}

function _5(selectedProvince) {
  return `Selected Province: ${selectedProvince}`;
}

function _selectedProvince(
  d3,
  projection,
  mapWidth,
  mapHeight,
  IRProvincesGeoJSON
) {
  let value = null;

  const geoPathGenerator = d3.geoPath().projection(projection);

  const svg = d3.create("svg").attr("viewBox", [0, 0, mapWidth, mapHeight]);

  svg
    .selectAll("path")
    .data(IRProvincesGeoJSON.features)
    .enter()
    .append("path")
    .attr("d", geoPathGenerator)
    .attr("stroke", "white")
    .attr("stroke-width", 1)
    .attr("fill", "lightgray")
    .on("click", (e, d) => {
      const node = svg.node();
      console.log(d);
      node.value = value =
        value === d.properties.NAME_1 ? null : d.properties.NAME_1;
      node.dispatchEvent(new CustomEvent("input"));
      outline.attr("d", e.target.getAttribute("d"));
    })
    .on("mouseover", (e) => {
      d3.select(e.target).attr("fill", "gray");
    })
    .on("mouseout", (e) => {
      d3.select(e.target).attr("fill", "lightgray");
    });

  const outline = svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-linejoin", "round")
    .attr("pointer-events", "none");

  return Object.assign(svg.node(), { value: null });
}

function _7(md) {
  return md`
## Scratchpad
  `;
}

function _projection(d3, mapWidth, mapHeight, IRProvincesGeoJSON) {
  return d3
    .geoEquirectangular()
    .fitSize([mapWidth, mapHeight], IRProvincesGeoJSON);
}

function _mapHeight(number) {
  return number({
    min: 0,
    max: 1000,
    step: 10,
    value: 500,
    title: "Map Height (px)",
  });
}

function _mapWidth(number) {
  return number({
    min: 0,
    max: 954,
    step: 10,
    value: 920,
    title: "Map Width (px)",
  });
}

function _projectionScale(number, projection) {
  return number({
    min: 0,
    max: 20000,
    step: 10,
    value: projection.scale(),
    title: "Projection Scale",
    disabled: true,
  });
}

function _projectionTranslateX(number, projection) {
  return number({
    min: 0,
    max: 20000,
    step: 10,
    value: projection.translate()[0],
    title: "Projection Translate X",
    disabled: true,
  });
}

function _projectionTranslateY(number, projection) {
  return number({
    min: 0,
    max: 20000,
    step: 10,
    value: projection.translate()[1],
    title: "Projection Translate Y",
    disabled: true,
  });
}

function _14(md) {
  return md`
## Useful References
  `;
}

function _15(md) {
  return md`
- [Source GeoJSON](https://github.com/n4cr/iran-geojson)
  `;
}

function _16(md) {
  return md`
## Imports
  `;
}

function _IRProvincesGeoJSON(FileAttachment) {
  return FileAttachment("iran_geo.json").json();
}

function _topojson(require) {
  return require("https://unpkg.com/topojson@3");
}

function _d3(require) {
  return require("d3@6");
}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() {
    return this.url;
  }
  const fileAttachments = new Map([
    [
      "iran_geo.json",
      {
        url: new URL(
          "./files/b6aebfb7858b6499d78482c340d87bc3a7b9212cb1ec68cad7029b73d33c553f03dd1345da781f40d3c4dec0e79a5458bb067a890033536ce97eff73a7cb560d.json",
          import.meta.url
        ),
        mimeType: "application/json",
        toString,
      },
    ],
  ]);
  main.builtin(
    "FileAttachment",
    runtime.fileAttachments((name) => fileAttachments.get(name))
  );
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["selectedProvince"], _5);
  main
    .variable(observer("viewof selectedProvince"))
    .define(
      "viewof selectedProvince",
      ["d3", "projection", "mapWidth", "mapHeight", "IRProvincesGeoJSON"],
      _selectedProvince
    );
  main
    .variable(observer("selectedProvince"))
    .define(
      "selectedProvince",
      ["Generators", "viewof selectedProvince"],
      (G, _) => G.input(_)
    );
  main.variable(observer()).define(["md"], _7);
  main
    .variable(observer("projection"))
    .define(
      "projection",
      ["d3", "mapWidth", "mapHeight", "IRProvincesGeoJSON"],
      _projection
    );
  main
    .variable(observer("viewof mapHeight"))
    .define("viewof mapHeight", ["number"], _mapHeight);
  main
    .variable(observer("mapHeight"))
    .define("mapHeight", ["Generators", "viewof mapHeight"], (G, _) =>
      G.input(_)
    );
  main
    .variable(observer("viewof mapWidth"))
    .define("viewof mapWidth", ["number"], _mapWidth);
  main
    .variable(observer("mapWidth"))
    .define("mapWidth", ["Generators", "viewof mapWidth"], (G, _) =>
      G.input(_)
    );
  main
    .variable(observer("viewof projectionScale"))
    .define(
      "viewof projectionScale",
      ["number", "projection"],
      _projectionScale
    );
  main
    .variable(observer("projectionScale"))
    .define(
      "projectionScale",
      ["Generators", "viewof projectionScale"],
      (G, _) => G.input(_)
    );
  main
    .variable(observer("viewof projectionTranslateX"))
    .define(
      "viewof projectionTranslateX",
      ["number", "projection"],
      _projectionTranslateX
    );
  main
    .variable(observer("projectionTranslateX"))
    .define(
      "projectionTranslateX",
      ["Generators", "viewof projectionTranslateX"],
      (G, _) => G.input(_)
    );
  main
    .variable(observer("viewof projectionTranslateY"))
    .define(
      "viewof projectionTranslateY",
      ["number", "projection"],
      _projectionTranslateY
    );
  main
    .variable(observer("projectionTranslateY"))
    .define(
      "projectionTranslateY",
      ["Generators", "viewof projectionTranslateY"],
      (G, _) => G.input(_)
    );
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  const child1 = runtime.module(define1);
  main.import("autoSelect", child1);
  main.import("select", child1);
  main.import("number", child1);
  main.import("checkbox", child1);
  main.import("slider", child1);
  main
    .variable(observer("IRProvincesGeoJSON"))
    .define("IRProvincesGeoJSON", ["FileAttachment"], _IRProvincesGeoJSON);
  main
    .variable(observer("topojson"))
    .define("topojson", ["require"], _topojson);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
