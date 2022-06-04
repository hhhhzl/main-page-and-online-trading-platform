import reaat, {useEffect, useState} from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import './screen.css';
import { Add, ArrowForward, Check } from '@material-ui/icons';
import useWindowDimensions from '../../utils/sizewindow';
import AreaSeriesForStockPrice from '../graphs/AreaSeriesForStockPrice';
import * as d3 from "d3";
import { last } from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { DataNone } from "../../static/StockNone";
import { SampleData } from '../../static/Stockdata';
import { Link } from 'react-router-dom';
import { addWatchlist, fmoney, getWatchList, setLastStock, setWatchlist } from 'utils';
import { WatchListAction } from 'redux/actions/WatchListAction';
import { connect } from 'react-redux';


function StockPriceGraphSimplify({
  widthratio,
  stockdata,
  kline,
  }) {
  const {width,height} = useWindowDimensions();
  const [timeP,setTimeP] = useState(7);
  const [id,setID] = useState(0)
  const [vertify, setvertify] = useState(true);
  const [add,setAdd] = useState(false)
  const [showAddselfselected, setshowAddselfselected] = useState(false)
  const [showdeleteselfselected, setshowdeleteselfselected] = useState(false)



  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const handleMouseOver1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseOver2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => {setshowAddselfselected(false);window.location.reload(false)}
  const handleClose2 = () => {setshowdeleteselfselected(false);window.location.reload(false)}
  const handleShow = () => setShow(true);

  
  
  

    

      

    const addwatchlistToloacl = (symbol) =>{
      addWatchlist(symbol)
    }

    const removeFromWatchList = (symbol) =>{
      let watchlist = getWatchList()
      let deletewatchList = watchlist.filter(elem => elem != stockdata.代码)
      setWatchlist(deletewatchList)
      setAdd(false)
    }


    const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
    const parseDate = d3.timeParse(dateTimeFormat);
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      (d) => parseDate(d.datetime)
    );
    const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
      kline? kline : DataNone
    );
    
    const [start, setstart] = useState(data[Math.max(0, data.length - 7)])
    const [end, setend] = useState(last(data))
    const [updown, setupdown] = useState(end.close >= start.close? false : true)

  const checkprice = (interval,id) =>{
      setend(last(data))
      setTimeP(interval)
      setID(id) 
      setstart(data[Math.max(0,data.length - interval)])    
      if (data[Math.max(0, data.length - interval)].close >= start.close){
          setupdown(true)
      }else{
          setupdown(false)
      }
      
      
      
  }

  const determineUporDown = () => {
    if (id == 0){
      const pricediff = (stockdata?.最新价-stockdata?.昨收).toFixed(2)
      const percentdiff = (((stockdata?.最新价/stockdata?.昨收) - 1)* 100).toFixed(2)
      if (stockdata?.最新价 - stockdata?.最新价 >= 0){
        return [true, pricediff, percentdiff]
      } else{
        return [false, pricediff, percentdiff]
      }    
    }else{
      const pricediff = (end.close - start.close).toFixed(2)
      const percentdiff = (((end.close/start.close) - 1)* 100).toFixed(2)
      if (end.close - start.close >= 0){
        return [true, pricediff, percentdiff]
      }else {
        return [false, pricediff, percentdiff]
      }
    }
  }

  useEffect(() =>{
    setstart(start)
    setupdown(end.close >= start.close? false : true)
    setID(id)
  },[start])

  
  const arrays = ["今日","一周","一个月","三个月","六个月","一年","三年"]



    useEffect(()=>{
      let watchlist = getWatchList()
      if (stockdata != null && watchlist != [] && watchlist != null){
        if (watchlist.includes(stockdata?.代码)){
          setAdd(true)
        }
      }
    })


    return (
      <>
      {vertify? ( <>
        <div>
        <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h5 className="text-center">您手机尺寸暂不支持专业版，请使用大尺寸设备</h5>
          </Modal.Body>
        </Modal>
      </div>


      {/* {showAddselfselected? <div style={{postion:"fixed", top :"89px", left:"0px"}}>
        <div style={{width:width>"360px"? "360px" :width, height:"48px"}}>

        </div>
        已将<strong>阿里巴巴</strong>加入自选</div> : null} */}
        <div>
        <Modal size="sm"
      aria-labelledby="contained-modal-title-vcenter" 
      show={showAddselfselected} onHide={handleClose1}>
          <Modal.Header closeButton> 
          <div style={{
            fontSize: "14px",
            fontfamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
            fontWeight: "400",
            color: "#000000",
            lineHeight: "24px"}}
          >
            已将{" "}<strong>{stockdata?.名称}</strong>{" "}加入自选列表
          </div></Modal.Header>
        </Modal>
      </div>

      <div>
        <Modal size="sm"
      aria-labelledby="contained-modal-title-vcenter" 
      show={showdeleteselfselected} onHide={handleClose2}>
          <Modal.Header closeButton> 
          <div style={{
            fontSize: "14px",
            fontfamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
            fontWeight: "400",
            color: "#000000",
            lineHeight: "24px"}}
          >
            已将<strong>{stockdata?.名称}</strong>移除自选列表
          </div></Modal.Header>
        </Modal>
      </div>

      <div>
      <Card style={{width:widthratio, borderColor:"white"}} > 
      <div style={{width:"100%",display:"flex", justifyContent:"space-between"}}>
        <div style={{width:"max-content"}}>

                  <div style={{
                      height:"40px",
                      fontSize:"24px",    
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                      fontWeight:"bold",
                      padding:"0px",
                      color:"#2A2B30",
                      lineHeight:"40px",
                      letterSpacing:"1px",
                      }}>{stockdata? stockdata.名称 : null}</div>

                  <div style={{
                      height:"56px",
                      position:"relative",
                      top:"0",
                      fontSize:"36px",
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                      fontWeight:"500",
                      padding:"0px",
                      color:"#2A2B30",
                      lineHeight:"56px",
                      letterSpacing:"1px",
                      }}>￥{stockdata? fmoney(stockdata?.最新价,2) 
                        : 
                      "LOADING..."
                      }</div>

            <div style={{height:"28px",display:"flex",justifyContent:"left"}}>
                  <div style={{
                        fontSize:"16px",
                        fontFamily:"Microsoft YaHei UI-Bold",
                        fontWeight:"500",
                        padding:"0px",
                        color:determineUporDown()[0]? "#FF3541" :  "#42E083",
                        lineHeight:"28px",
                        }}>{stockdata? <>

                        {determineUporDown()[0]? 
                        <>+￥{determineUporDown()[1]}</> 
                        : <>-￥{determineUporDown()[1] *-1}</>} 
                        (
                        {determineUporDown()[0]? 
                        <>+{determineUporDown()[2]}%</> 
                        : <>{determineUporDown()[2]}%</>}
                        )
                        
                         </> : null}
                         
                        </div>

                  <div style={{
                          fontSize:"16px",
                          marginLeft:"6px",
                          fontFamily:"Microsoft YaHei UI-Bold",
                          fontWeight:"400",
                          padding:"0px",
                          color:"#9C9EAC",
                          lineHeight:"28px",
                          }}>

                          {arrays[id] == "今日"? "今日" : <>近{arrays[id]}</> }
                          
                          </div>
            </div>

          </div>


          <div style={{width:"264px",height:"100px"}}>


          <div style={{display:"flex",justifyContent:"space-between",padding:"13% 0% 10% 0%"}}>
          {add? <><div>
                          <Button style={{background: "#F5F6F8",width: "120px",height: "48px", borderRadius: "4px 4px 4px 4px",opacity: 1, borderWidth:"0"}}
                          variant="outline-secondary"
                          onClick={() => {removeFromWatchList();setshowdeleteselfselected(true)}}
                          >     
                              <div   style={{
                                  display:"flex",
                                  justifyContent:"space-between",
                              fontSize:"14px",
                              color:"#2A2B30",
                              fontFamily:"Microsoft YaHei UI-Bold",
                              fontWeight:"bold",
                              padding:"5% 0% 10% 0%",
                              lineHeight:"24px"
                              }}><Check/>已加入自选</div>              
                          </Button>
                     </div></> : <>
                     <div>
                          <Button className="select-Button"  style={{width: "120px",height: "48px", borderRadius: "4px 4px 4px 4px",opacity: 1, borderWidth: "1px", borderColor:"#2A2B30"}} 
                          variant="outline-secondary"
                          onClick = {() => {setshowAddselfselected(true);addwatchlistToloacl(stockdata?.代码)}}
                          onMouseOver={handleMouseOver1}
                          onMouseLeave={handleMouseLeave1}
                          > 
                    <div className ="hover-fontcolor"  style={{
                              display:"flex",justifyContent:"space-between",
                              fontSize:"14px",
                              color:hover1? "white" : "#2A2B30" ,
                              fontFamily:"Microsoft YaHei UI-Bold",
                              fontWeight:"bold",
                              padding:"5% 10% 10% 3%",
                              lineHeight:"24px"
                              }}
                              ><Add className ="hover-fontcolor"/>加入自选</div>              
                          </Button>
                     </div>
                     
                     </>}    
                     <div>
                          <Button className="select-Button" style={{textAlign:"center",width: "120px", height: "48px", borderRadius: "4px 4px 4px 4px",opacity: 1, border: "1px solid #2A2B30"}} 
                          variant="outline-secondary"
                          onMouseOver={handleMouseOver2}
                          onMouseLeave={handleMouseLeave2}
                          onClick={() => {
                            if (width < 1200){
                              handleShow()
                            }
                          } }
                          >
                            {width > 1200? <>
                              <Link to='trade/pro'>
                          <div className ="hover-fontcolor" style={{
                              display:"flex",justifyContent:"space-between",
                              fontSize:"14px",
                              fontFamily:"Microsoft YaHei UI-Bold",
                              color: hover2? "white" : "#2A2B30" ,
                              fontWeight:"bold",
                              padding:"5% 13% 10% 10%",
                              lineHeight:"24px",
                              }}>  专业版{" "}
                              <ArrowForward className ="hover-fontcolor" style={{
                              padding:"0px",
                              }}
                              /> </div> </Link> 

                            </> : <>
                            <div className ="hover-fontcolor" style={{
                              display:"flex",justifyContent:"space-between",
                              fontSize:"14px",
                              fontFamily:"Microsoft YaHei UI-Bold",
                              color: hover2? "white" : "#2A2B30" ,
                              fontWeight:"bold",
                              padding:"5% 13% 10% 10%",
                              lineHeight:"24px",
                              }}>  专业版{" "}
                              <ArrowForward className ="hover-fontcolor" style={{
                              padding:"0px",
                              }}
                              /> </div>
                            </>}             
                          </Button>
                       </div>
                   </div>
                 </div>
               </div>
    
              <div style={{marginTop:"8px",width:"100%", borderColor:"white"}}>
              <AreaSeriesForStockPrice width={widthratio} 
              timeperiod = {timeP} 
              start={start}
              end = {end}
              xScale = {xScale}
              xAccessor = {xAccessor}
              displayXAccessor = {displayXAccessor}
              data = {data}
              updown = {updown}
               />
              </div>



          <div style={{marginTop:"0px",width:"100%", borderBottom:"1px solid #E5E8EE"}}>
          <div style={{display:"flex",justifyContent:"space-between",padding:"0% 42.70% 0px 0%"}}>
                <Button 
                style={{height:"36px",borderBottom: id == 0? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px" ,
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 0? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(7,0)}}
                >
                1D
                </Button>

                <Button style={{height:"36px",borderBottom: id == 1? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 1? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(7,1)}}
                >
                1W
                </Button>

                <Button style={{height:"36px",borderBottom: id == 2? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 2? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(30,2)}}
                >
                1M
                </Button>

                <Button style={{height:"36px",borderBottom: id == 3? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 3? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(66,3)}}
                >
                3M
                </Button>

                <Button style={{height:"36px",borderBottom: id == 4? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 4? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(132,4)}}
                >
                6M
                </Button>

                <Button style={{height:"36px",borderBottom: id == 5? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 5? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(365,5)}}
                >
                1Y
                </Button>

                <Button style={{height:"36px",borderBottom: id == 6? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:id == 6 ? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(600,6)}}
                >
                3Y
                </Button>
                </div> 
              </div>
       
    </Card>
    

    {/* <div style={{width:"100%"}}>
      <Card>   
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
    </div> */}
    </div>
    </>) : (<>
    <Card style={{width:"100%",borderRadius:"0px 0px 0px 0px"}} > 


          <div style={{height:"458px",overflow:"auto"}}>
            <div style={{marginTop:height*0.2}}>
            <Button style={{width:"80%",marginLeft:"10%"}} >登录</Button> 
            </div>
    </div>
    </Card>
    </>
       
      )}
     
    
    </>

    )
}

const mapStateToProps = (state) =>{
  return {
    config: state,

  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    WatchListChange: (config) => {
      dispatch(WatchListAction(config));
      console.log(config,335)
    },  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPriceGraphSimplify)