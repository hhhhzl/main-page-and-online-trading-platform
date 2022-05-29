import useWindowDimensions from "components/../utils/sizewindow";
import PorforlioMoveGraph from "components/screen/PortforlioMoveGraph";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import PageHeader from "components/screen/PageHeader";
import { Button ,Dropdown} from "react-bootstrap";
import { useState } from "react";
import RulesModual from "components/Competition/RulesModual";

export default ({searchData}) => {
    const { width, height } = useWindowDimensions();
    const [showCompetitionrules, setshowCompetitionrules] = useState(false)
    const handleClose = () => {setshowCompetitionrules(false)};

    // The size of the list
    // It will be updated later

    return (
        <>
            <PageHeader searchData = {searchData} />
            <RulesModual showModal = {showCompetitionrules} hideModal = {handleClose} />

            <div style={{ marginTop: 0, width: "100%", minHeight: "500px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%"}}></div>


                <div style={{ width: width > 1200? "1200px" : width -96, minHeight: "500px", minWidth: "fix-content", }}>
                     <div style={{ height: height * 0.075, width: "100%", display: "flex", justifyContent: "right", paddingTop:"25px",paddingBottom:"24" }}>
                        

                        {
						width> 1200? null
							
						:(
							<div style={{
                                width:"80px",
                                height:"32px",
                                borderRadius: "4px 4px 4px 4px",
                                marginRight:"20px",
                                border:0,
                                opacity: 1
									  }}>
								<Dropdown drop={"down"} >
								<Dropdown.Toggle size="sm" 
                                style={{
                                    width:"80px",
                                    height:"32px",
                                    padding:"4px 12px 4px 12px",
                                    borderRadius: "4px 4px 4px 4px",
                                    background: "#F5F6F8",
								  border:"0"}} variant="primary" id="dropdown-basic">
								<div style={{
									  width: "56px",
                                      height: "24px",
                                      fontSize: "14px",
                                      fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                      fontWeight: "bold",
                                      color: "#2A2B30",
                                      lineHeight:"24px",
									  }}>自选股</div>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{
									  width:"360px", border:"0px"}}>
									<WatchList vertify={false} />
								</Dropdown.Menu>
							  </Dropdown>
							</div>
						)
					}

                          <Button 
							style={{
                             width:"80px",
                             height:"32px",
                             padding:"4px 12px 4px 12px",
                             background: "#F5F6F8",
                             borderRadius: "4px 4px 4px 4px",
                             border:0,
                            opacity: 1}}
                            onClick={() => setshowCompetitionrules(true)}
                            >
                                <div style={{     
                                    width: "56px",
                                    height: "24px",
                                    fontSize: "14px",
                                    fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                    fontWeight: "bold",
                                    color: "#2A2B30",
                                    lineHeight:"24px",

                                }}>
                                赛事规则
                               </div>
                        </Button>
                        
                        
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: width > 1200? "63.3%" : width -96}}>
                        <PorforlioMoveGraph widthratio={width > 1200? 1200 *0.633 : width -96} />
                        <div style={{ marginTop: height * 0.0564 }}>
                            <PendingOrder heightProp={0.23} modalHeight={0.7} />
                        </div>
                    </div>

                    {width> 1200? (<div style={{ width: "30%" }}>
								<WatchList heightratio={0.63} searchwidth={1200 * 0.3} />
					</div>) : null}

                    
					
					
                    </div>

                </div>
                <div style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%"}}></div>
            </div>

        </>
    )
}