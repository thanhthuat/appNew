import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import mapDataIE from "@highcharts/map-collection/countries/vn/vn-all.geo.json";
 // Initialize the map module
if (typeof Highcharts === 'object') {
    highchartsMap(Highcharts);
  }

const mapOptions = {
  chart: {
    map: "countries/ie/ie-all"
  },
  title: {
    text: " "
  },
  credits: {
    enabled: false
  },
  mapNavigation: {
    enabled: false
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "lat: {point.lat}, lon: {point.lon}"
  },
  series: [
    {
      // Use the gb-all map with no data as a basemap
      name: "Basemap",
      mapData: mapDataIE,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Locations",
      color: "#4169E1",
      data: [{ z: 10, keyword: "Galway", lat: 53.27, lon: -9.25 }],
      cursor: "pointer",
      point: {
        events: {
          click: function() {
            console.log(this.keyword);
          }
        }
      }
    }
  ]
};

const App = () => (
  <div>
    <HighchartsReact
      constructorType={"mapChart"}
      highcharts={Highcharts}
      options={mapOptions}
    />
  </div>
);

export default App
