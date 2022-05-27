import React, { useState } from 'react';
import useWindowDimensions from "components/../utils/sizewindow";
import { Col, Row, Card, CardGroup, Collapse, Button, Form, Accordion } from "react-bootstrap";
import 'components/TradingPlatform/eplatform.css'
import MarketTopGains from 'components/screen/MarketTopGainStocks';
import MarketStockSearch from 'components/screen/MarketStockSearch';
import AreaChart from 'components/graphs/areaChart';
import MarketOverview from 'components/screen/MarketOverView';
import { flexbox } from '@material-ui/system';
import LeadingIndustry from 'components/screen/LeadingIndustry';
import LeadingIndustryAll from 'components/screen/AllIndustry'
import PageHeader from 'components/screen/PageHeader';
import MarketUpdownDistribute from 'components/screen/MarkeUpdownDistribute';

export default () => {
    const { width, height } = useWindowDimensions();
    const [extend, setExtend] = useState(true)
    const [switchClose, setswitchClose] = useState(true)

    const extendbar = () => {
        setExtend(!extend)
    }
    return (

        <>
            <PageHeader />
            <Card style={{ padding: 0, borderColor: "white" }}>
                <Collapse in={switchClose}>
                    <Card.Body style={{ padding: 0, borderColor: "white" }}>
                        {width > 700 ?
                            <>
                                <div style={{ width: "100%", minWidth: "920px", minHeight: "500px", display: "flex", justifyContent: "space-between" }}>

                                    <div style={{ width: "50%", height: height * 0.55, minHeight: "500px" }}>
                                        <MarketOverview widthRatio={width > 920 ? width / 2 : 920 / 2} />
                                    </div>
                                    <div style={{ width: "1px", height: height * 0.55, backgroundColor: "#E5E8EE" }}></div>
                                    <div style={{ width: "50%", height: height * 0.52, minHeight: "500px" }}>
                                        <MarketUpdownDistribute widthRatio={width > 920 ? width / 2 : 920 / 2} />
                                    </div>

                                </div>

                            </>
                            : <>
                                <div style={{ width: "100%", height: height * 0.56, minHeight: "300px" }}>
                                    <MarketOverview widthRatio={width} />
                                </div>
                                <div style={{ width: "100%", height: height * 0.56 }}>
                                    <MarketUpdownDistribute widthRatio={width} />
                                </div>

                            </>}
                    </Card.Body>
                </Collapse>
            </Card>

            {switchClose ? <>
                <div style={{ marginTop: height * 0.056, margin: "48px" }}>
                    <LeadingIndustry setswitchClose={setswitchClose} />

                </div>
            </>
                :
                <>
                    <LeadingIndustryAll setswitchClose={setswitchClose} />
                </>
            }
        </>

    )
}