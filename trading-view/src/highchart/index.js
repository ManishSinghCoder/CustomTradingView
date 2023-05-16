import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import indicatorsAll from "highcharts/indicators/indicators-all";
import annotationsAdvanced from "highcharts/modules/annotations-advanced";
import priceIndicator from "highcharts/modules/price-indicator";
import fullScreen from "highcharts/modules/full-screen";
import stockTools from "highcharts/modules/stock-tools";
import exporting from "highcharts/modules/exporting";
import "./highchart.css";

indicatorsAll(Highcharts);
annotationsAdvanced(Highcharts);
priceIndicator(Highcharts);
fullScreen(Highcharts);
stockTools(Highcharts);
exporting(Highcharts);

let symbol = ["FET"];

function RealtimeChart() {
  const realTimeGraphData = [
    [1679563599000, 109.0, 118.0, 91.0, 129, 1090000.0],
    [1679563659000, 110.0, 120.0, 90.0, 150, 1100000.0],
    [1679563719000, 111.0, 122.0, 89.0, 181, 1110000.0],
    [1679563779000, 112.0, 124.0, 88.0, 184, 1120000.0],
    [1679563839000, 113.0, 126.0, 87.0, 136, 1130000.0],
    [1679563899000, 114.0, 128.0, 86.0, 139, 1140000.0],
    [1679564502000, 117.0, 134.0, 83.0, 130, 1170000.0],
    [1679564562000, 118.0, 136.0, 82.0, 181, 1180000.0],
    [1679564622000, 119.0, 138.0, 81.0, 99, 1190000.0],
    [1679564682000, 120.0, 140.0, 80.0, 163, 1200000.0],
    [1679564742000, 121.0, 142.0, 79.0, 211, 1210000.0],
    [1679564802000, 122.0, 144.0, 78.0, 127, 1220000.0],
    [1679564862000, 123.0, 146.0, 77.0, 158, 1230000.0],
    [1679564922000, 124.0, 148.0, 76.0, 159, 1240000.0],
    [1679564982000, 125.0, 150.0, 75.0, 133, 1250000.0],
    [1679565042000, 126.0, 152.0, 74.0, 166, 1260000.0],
    [679565102000, 127.0, 154.0, 73.0, 189, 1270000.0],
    [1679564211000, 107.0, 114.0, 93.0, 142, 1070000.0],
    [1679564271000, 108.0, 116.0, 92.0, 152, 1080000.0],
    [1679564331000, 109.0, 118.0, 91.0, 199, 1090000.0],
    [1679564391000, 110.0, 120.0, 90.0, 143, 1100000.0],
    [1679564451000, 111.0, 122.0, 89.0, 99, 1110000.0],
    [1679564511000, 112.0, 124.0, 88.0, 183, 1120000.0],
    [1679564571000, 113.0, 126.0, 87.0, 93, 1130000.0],
    [1679564631000, 114.0, 128.0, 86.0, 176, 1140000.0],
    [1679564691000, 115.0, 130.0, 85.0, 141, 1150000.0],
    [1679564751000, 116.0, 132.0, 84.0, 103, 1160000.0],
    [1679564811000, 117.0, 134.0, 83.0, 175, 1170000.0],
  ];

  let volume = [];

  for (let i = 0; i < realTimeGraphData.length; i++) {
    volume.push([realTimeGraphData[i][0], realTimeGraphData[i][5]]);
  }

  const options = {
    yAxis: [
      {
        labels: {
          align: "left",
        },
        height: "80%",
      },
      {
        labels: {
          align: "left",
        },
        top: "80%",
        height: "20%",
        offset: 0,
      },
    ],
    accessibility: {
      enabled: false,
      announceNewData: {
        enabled: true,
        interruptUser: true,
        minAnnounceInterval: 0,
      },
    },
    chart: {
      backgroundColor: "#131722",
      type: "candlestick",
      borderRadius: "5px",
      animation: true,
      events: {
        load: realTimeGraphData,
      },
    },
    title: {
      text: `<h1 id="chart-title">${symbol}</h1>`,
      align: "left",
    },
    rangeSelector: {
      enabled: false,
      inputEnabled: false,
      selected: 0,
    },
    tooltip: {
      backgroundColor: "#2d2e3d",
      borderColor: "#2d2e3d",
      style: {
        color: "white",
      },
    },
    series: [
      {
        id: "candleStick",
        name: "FET",
        data: realTimeGraphData,
      },
      {
        type: "column",
        id: "candleStick-volume",
        name: "FET-volume",
        data: volume,
        yAxis: 1,
      },
    ],
  };

  return (
    <div className="highChartContainer">
      <h1 style={{ color: 'white' }}>Custom Trading View Graph</h1>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export default React.memo(RealtimeChart);
