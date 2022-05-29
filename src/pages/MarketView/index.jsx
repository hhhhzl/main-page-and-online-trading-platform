import React, { useEffect, useState } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import {
  Col,
  Row,
  Card,
  CardGroup,
  Collapse,
  Button,
  Form,
  Accordion,
} from "react-bootstrap";
import "components/TradingPlatform/eplatform.css";
import MarketTopGains from "components/screen/MarketTopGainStocks";
import MarketStockSearch from "components/screen/MarketStockSearch";
import AreaChart from "components/graphs/areaChart";
import MarketOverview from "components/screen/MarketOverView";
import { flexbox } from "@material-ui/system";
import LeadingIndustry from "components/screen/LeadingIndustry";
import LeadingIndustryAll from "components/screen/AllIndustry";
import PageHeader from "components/screen/PageHeader";
import MarketUpdownDistribute from "components/screen/MarkeUpdownDistribute";

import MarketQuotation from "components/screen/MarketQuotation";

export default ({searchData}) => {
  const { width, height } = useWindowDimensions();
  const [extend, setExtend] = useState(true);
  const [indusAll,setIndusAll] = useState(1);

  const extendbar = () => {
    setExtend(!extend);
  };

  const handleShowDetails = (prop) => {
	  console.log(prop);
	  if(prop==1){
		setIndusAll(3)
	  }
	  if(prop==2){
		setIndusAll(4)
	  }
	  if(prop==3){
		setIndusAll(1)  
	  }
	  if(prop==4){
		setIndusAll(2)
	  }
  };
//   useEffect(() => {
//       console.log(showDetails)
//   })
  return (
    <>
      <PageHeader searchData = {searchData}/>
      <Card style={{ padding: 0, borderColor: "white" }}>
        <Collapse in={indusAll == 1}>
          <Card.Body style={{ padding: 0, borderColor: "white" }}>
            {width > 700 ? (
              <>
                <div
                  style={{
                    width: "100%",
                    minWidth: "920px",
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: height * 0.55,
                      minHeight: "500px",
                    }}
                  >
                    <MarketOverview
                      widthRatio={width > 920 ? width / 2 : 920 / 2}
                    />
                  </div>
                  <div
                    style={{
                      width: "1px",
                      height: height * 0.55,
                      backgroundColor: "#E5E8EE",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "50%",
                      height: height * 0.52,
                      minHeight: "500px",
                    }}
                  >
                    <MarketUpdownDistribute
                      widthRatio={width > 920 ? width / 2 : 920 / 2} searchData ={searchData}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "100%",
                    height: height * 0.56,
                    minHeight: "300px",
                  }}
                >
                  <MarketOverview widthRatio={width} />
                </div>
                <div style={{ width: "100%", height: height * 0.56 }}>
                  <MarketUpdownDistribute widthRatio={width} />
                </div>
              </>
            )}
          </Card.Body>
        </Collapse>
      </Card>
	  
	  {
		indusAll == 1 ?(
			<>
			  <div style={{ marginTop: height * 0.056, margin: "48px" }}>
				<LeadingIndustry
				  handleShowDetails={handleShowDetails}
				  indusAll={indusAll}
				  setIndusAll={setIndusAll}
				/>
			  </div>
			</>
		):indusAll == 2? (
			<>
			  <LeadingIndustryAll 
			  setIndusAll={setIndusAll}
			  indusAll={indusAll}
			  handleShowDetails={handleShowDetails} />
			</>
		) :(
			<>
			  <MarketQuotation handleShowDetails={handleShowDetails} indusAll={indusAll}/>{" "}
			</>
		) 
		  
	  }
    </>
  );
};
