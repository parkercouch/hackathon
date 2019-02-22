import * as React from "react";
import { Chart } from "react-google-charts";


const Map = (props) => (
  <div className="map">
    <h2 className="f2 tl ttc mb3 flex">{props.title}<span className="dib tr ml-auto">{props.year}</span></h2>
    <p className="f5 tl mb4">{props.description}</p>
    <Chart
      className="display-map ba bw1"
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
      width="100%"
      height="100%"
      data={props.data}
      // options={{colorAxis: { colors: ['#E3F2FD', '#0D47A1'] }}}
      options={{colorAxis: { colors: props.colors }}}
      mapsApiKey="AIzaSyCR1dYhltGUWSPjQaJF5XA_fDDWIaziqRg"
    />
  </div>
);

export default Map;