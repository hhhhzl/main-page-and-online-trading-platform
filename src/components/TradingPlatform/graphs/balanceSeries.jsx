import React,{useState, useEffect} from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
    AlternatingFillAreaSeries,
    discontinuousTimeScaleProviderBuilder,
    Chart,
    ChartCanvas,
    XAxis,
    YAxis,
    MouseCoordinateX,
    TrendLine,
    DrawingObjectSelector
    

} from "react-financial-charts";
import { initialData } from "../../../static/testdata";
import useWindowDimensions from "../../../utils/sizewindow";
import { saveInteractiveNodes, getInteractiveNodes} from "./interactiveutils.js"
  

export default function UserBalanceSeries({w,h}){
  const [getInteractiveNode, setgetInteractiveNode] = useState()
  const [saveInteractiveNode, setInteractiveNode] = useState()
   const {height,width} = useWindowDimensions();
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => new Date(d.date)
      );

      // get the width and height of user's window
      const heightx = height * h;
      const widthy = width * w;
      const margin = { left: widthy*0.05, right: widthy*0.1, top: 0, bottom: heightx*0.1 };
      // const Window_height = height;
      // const Window_width = width * 0.5;
      // const margin = { left: width*0.01, right: width*0.05, top: 0, bottom: height*0.1 };
      const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        initialData
      );
      const pricesDisplayFormat = format(".2f");
      const max = xAccessor(data[data.length - 1]);
      const min = xAccessor(data[Math.max(0, data.length - 100)]);
      const xExtents = [min, max + 5];
    
      const gridHeight = heightx - margin.top - margin.bottom;
      const elderRayHeight = 100;
      const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
      const barChartHeight = gridHeight / 4;

      const chartHeight = gridHeight - elderRayHeight;

      const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
      const timeDisplayFormat = timeFormat(dateTimeFormat);
    
    
      const candleChartExtents = (data) => {
        return data.open;
      };
    
      const yEdgeIndicator = (data) => {
        return data.open;
      };
    
      const openCloseColor = (data) => {
        return data.close > data.open ? "#26a69a" : "#ef5350";
      };

    return(
      <>
      <div className="assets-curve">      
        <ChartCanvas
        height={heightx}
        ratio={5}
        width={widthy}
        margin={margin}
        data={data}
        seriesName="Data"
        xScale={xScale}
        displayXAccessor={displayXAccessor}
        xAccessor={xAccessor}
      >
        <Chart id={3} height={gridHeight} yExtents={candleChartExtents}>
          
          
          <XAxis showGridLines showTickLabel axisAt="bottom" orient="bottom" displayFormat={timeDisplayFormat} />
          <YAxis showGridLines showTicklabel={false}  tickFormat={pricesDisplayFormat} />
          <AlternatingFillAreaSeries baseAt ={134.80} yAccessor={yEdgeIndicator} connectNulls ={true} strokeStyle ={{ top: '#26a69a', bottom: '#ef5350' }}/> 
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeDisplayFormat}
          />
          <TrendLine 
          snap={true} 
          enabled={true} 
          // snapTo={d => [d.high, d.low]}
          onStart={() => console.log("START")}
          trends={[
            {start: [timeDisplayFormat("2021-02-02 15:45:00"), 134.78], end: [timeDisplayFormat("2021-02-02 15:30:00"), 134.98],appearance: { stroke: "green" },
            type: "XLINE"}
          ]}/>
          
        </Chart>
        {/* <DrawingObjectSelector
          enabled={true}
          getInteractiveNodes={setgetInteractiveNode}
          drawingObjectMap={{
            Trendline: "trends"
          }}
        /> */}
      </ChartCanvas>
      </div>
      </>
    )

}