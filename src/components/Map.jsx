import * as React from "react";
import { Chart } from "react-google-charts";


const Map = (props) => (
  <div className="App">
    <h2>{props.title}</h2>
    <Chart className="display-map"
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = props.data[selection[0].row + 1];
            console.log("Selected : " + region);
          }
        }
      ]}
      chartType="GeoChart"
      width="80%"
      height="100%"
      data={props.data}
      options={{colorAxis: { colors: ['#E3F2FD', '#0D47A1'] }}}
      mapsApiKey="AIzaSyCR1dYhltGUWSPjQaJF5XA_fDDWIaziqRg"
    />
  </div>
);

export default Map;