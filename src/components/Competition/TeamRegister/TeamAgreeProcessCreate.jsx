import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { apiCreateTeamAccount } from 'api/main_platform/competitions';
import HeaderCreate from 'components/MainPage/header';
import Sidebar from 'components/MainPage/Sidebar';
import { competitionID } from 'constants/maps';
import { useState } from 'react';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useWindowDimensions from 'utils/sizewindow';
import Footer from "../../MainPage/footer";
import TeamQuestionnaire from './TeamQuestionnaire';
import TeamReister from './TeamRegister';
import samplePDF from "assets/pdf/参赛协议.pdf";
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';

export default function TeamAgreeProcessCreate({toggle}) {
    const {width, height} = useWindowDimensions();
    const [page, setpage] = useState(0)
    const [disable, setdisable] = useState(true)
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const [showTiaokuan, setshowTiaokuan] = useState(false)

    const [headPortrait,setHeadPortrait] = useState('/homeCutout/Group 1073@2x.png')
    const [teamname, setteamname] = useState("")
    const [lianghua, setlianghua] = useState(false)
    const [duotou, setduotou] = useState(false)

    const [gradeAsk, setGradeAsk] = useState("")
    const [investmentTime, setInvestmentTime] = useState("")
    const [attentionIndustry, setAttentionIndustry] = useState("")

    const Pageprocess = (headPortrait) => {
        if (headPortrait != undefined) {
            setHeadPortrait(headPortrait);
        }
        if (page != 6) {
            setpage(page + 1)
        }
    }

    const backPageprocess = () => {
        setpage(page - 1)
    }

    const Pagereduce = () => {
        setpage(page - 1)
    }
    const sendUserhome = () => {
        history.push("/home")
    }
    
    const [successSendtoC, setsuccessSendtoC] = useState(false)
    const [showExist, setshowExist] = useState(false)
    const [deadline, setdeadline] = useState(false)
    const [teamnameDuplicate, setteamnameDuplicate] = useState(false)

    const createTeam = async () =>{
        try{
            let data = {}
            if (headPortrait === "/homeCutout/Group 1073@2x.png"){
                data = {
                    competition_id:competitionID,
                    name:teamname,
                    track:lianghua? "Q" : "S",
                    // avatar:headPortrait
                }
            }else{
                data = {
                    competition_id:competitionID,
                    name:teamname,
                    track:lianghua? "Q" : "S",
                    avatar:headPortrait
                }
            }
            console.log('create team', data)
            const response = await apiCreateTeamAccount(data)      
            const messge = response.data.msg
            if (messge == "The user has already joined a team in this competition."){
                setshowExist(true)
            }else if (messge == "OK."){  
                setsuccessSendtoC(true)
                localStorage.setItem("createTeam", "true")
            }else if (messge == "The name is already in use."){
                setteamnameDuplicate(true)      
            }else if(messge == "The queried resource is not found."){
                alert("注册失败")
            }else {
                setdeadline(true)
            }
        }catch(e){
            console.error(e)
            alert("系统错误，请稍后重试..")
        }    
    }


    const process = [
        {
            id: 1,
            title: "参赛通知",
            pagename: "报名规则",
            pagetext: "每位选手只能创立/加入一个赛事团队。报名成功后，无法更换团队与赛道。"
        },
        {
            id: 2,
            title: "参赛通知",
            pagename: "报名规则",
            pagetext: "每位选手只能创立/加入一个赛事团队。报名成功后，无法更换团队与赛道。"
        },
        {
            id: 3,
            title: "参赛通知",
            pagename: "报名规则",
            pagetext: "每位选手只能创立/加入一个赛事团队。报名成功后，无法更换团队与赛道。"

        },
        {
            id: 4,
            title: "参赛通知",
            pagename: "交易规则",
            pagetext: "大赛交易规则模拟A股交易规则；其中，每支证券买入时不得超过账户总资产的25%。量化选手无法手动交易股票；主观投资选手无法通过代码交易股票。"

        },
        {
            id: 5,
            title: "参赛通知",
            pagename: "交易规则",
            pagetext: "赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。“财经洞悉”将每两周举行一次，共计六次。 优秀的分析作者将获得杰出证书，独家采访与刊登，以及金融机构推荐机会等。（“财经洞悉”作为投资比赛的附属活动，此板块不影响比赛分数）"
        },
        {
            id: 6,
            title: "总览/回顾",
            pagename: "大赛流程",
            pagetext: <>大赛分为初赛（指标分数）、复赛（投资报告）、决赛（线上展示）；量化选手与主观投资选手分开竞争与排名。<br/>我同意大赛选拔机制，并对评委筛选结果无异议。</>

        },
    ]


    return (
        <>
            <HeaderCreate toggle={toggle}/>
            {isOpen ? (<Sidebar isOpen={isOpen} toggle={toggle}/>) : null}

            <Modal
        show={showTiaokuan}
        onHide={() => setshowTiaokuan(false)}
        size='lg'
        // fullscreen={true}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="active-500" style={{textAlign:"center"}}>
                     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                     <div
                        style={{
                            width:"100%",
                            // border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: height-200,
                            overflow:"scroll"
                        }}
                    >
                        <Viewer style={{width: "100%"}} fileUrl= {samplePDF} />
    
                        </div>
                         
                    </Worker>
               </Modal.Body>
        </Modal>

            <Modal
                show={teamnameDuplicate}
                onHide={() => setteamnameDuplicate(false)}
                // className="general-modal"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body style={{textAlign: "center",letterSpacing:"2px"}}>团队名称已被使用，请更改！ </Modal.Body>
            </Modal>

            <Modal
                show={successSendtoC}
                centered
                className="general-modal"
            >
                <Modal.Header></Modal.Header>
                <Modal.Body>恭喜您报名成功！如果您是以团队形式参赛，请联系团员报名赛事，提交入队申请。 </Modal.Body>
                <Modal.Footer style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Button className="modal-btn modal-btn-submit" variant="primary" onClick={() => sendUserhome()}>
                        返回主页
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={deadline}
                centered
                className="general-modal"
            >
                <Modal.Header></Modal.Header>
                <Modal.Body style={{textAlign: "center",letterSpacing:"2px"}}>报名失败</Modal.Body>
                <Modal.Footer style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Button className="modal-btn modal-btn-submit" variant="primary" onClick={() => sendUserhome()}>
                            回主页
                        </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showExist}
                centered
                className="general-modal"
            >
                <Modal.Header></Modal.Header>
                <Modal.Body>注册失败, 您已存在于一个队伍当中。</Modal.Body>
                <Modal.Footer style={{width: "100%", display: "flex", justifyContent: "center"}}>      
                        <Button className="modal-btn modal-btn-submit" variant="primary" onClick={() => sendUserhome()}>
                            返回主页
                        </Button>
                </Modal.Footer>
            </Modal>

            {/* /////////////////////////////////////////////////////////////////////// */}


            {page == 0 ?
                <>
                    <TeamReister
                        Pageprocess={Pageprocess}
                        teamname={teamname}
                        setteamname={setteamname}
                        lianghua={lianghua}
                        duotou={duotou}
                        setlianghua={setlianghua}
                        setduotou={setduotou}
                        headPortrait = {headPortrait}
                        setHeadPortrait = {setHeadPortrait}

                    />

                </> : page == 1 ?
                    <>
                        <TeamQuestionnaire
                            Pageprocess={Pageprocess}
                            backPageprocess={backPageprocess}
                            gradeAsk={gradeAsk}
                            setGradeAsk={setGradeAsk}
                            investmentTime={investmentTime}
                            setInvestmentTime={setInvestmentTime}
                            attentionIndustry={attentionIndustry}
                            setAttentionIndustry={setAttentionIndustry}
                        />

                    </> :

                    <div style={{
                        marginTop: height * 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#F5F6F8"
                    }}>

                        <div style={{width: "48px", maxWidth: "18.75%"}}></div>
                        <div style={{
                            width: "1200px", minWidth: "fix-content", minHeight: "700px",
                            minWidth: "fix-content",
                            height: "max-content",
                            marginBottom:"84px",
                        }}>

                            <div style={{marginTop: "64px", height: "111px", width: "100%"}}>
                                <div style={{
                                    paddingBottom: "24px",
                                    paddingTop: "48px",
                                    fontSize: "24px",
                                    fontFamily: "Microsoft YaHei U-Bold, Microsoft YaHei UI",
                                    fontWeight: "bold",
                                    color: "#2A2B30",
                                    lineHeight: "40px",
                                    letterSpacing: "1px"
                                }}>
                                    {process[page - 1].title}
                                </div>
                            </div>

                            <div style={{minHeight: "700px", height:"max-content", width: "100%", backgroundColor: "white",paddingBottom:"60px"}}>

                                <div style={{marginLeft: "24px", height: "8.57%"}}>
                                    <IconButton style={{paddingTop: "24px", paddingBottom: "16px"}}
                                                onClick={() => Pagereduce()}>
                                        <ArrowBack/>
                                    </IconButton>
                                </div>

                                {page == 6 ? <>

                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <div style={{width: "160px", height: "160px"}}>
                                            <Image src={headPortrait} roundedCircle
                                                   style={{position: "relative", width: "100%", height: "100%"}}/>
                                        </div>


                                    </div>

                                    <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "20px",
                                            fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                            fontWeight: "bold",
                                            color: "#2A2B30",
                                            lineHeight: "40px",
                                            letterSpacing: "1px",
                                        }}>
                                            团队名称

                                        </div>
                                    </div>

                                    <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "14px",
                                            fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                            fontWeight: "400",
                                            color: "#2A2B30",
                                            lineHeight: "24px",
                                        }}>{teamname}</div>
                                    </div>

                                    <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "20px",
                                            fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                            fontWeight: "bold",
                                            color: "#2A2B30",
                                            lineHeight: "40px",
                                            letterSpacing: "1px",
                                        }}>
                                            赛道选择

                                        </div>
                                    </div>

                                    <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "14px",
                                            fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                            fontWeight: "400",
                                            color: "#2A2B30",
                                            lineHeight: "24px",
                                        }}>{
                                            lianghua ? "量化" : "主观"
                                        }赛道
                                        </div>
                                    </div>


                                    <div style={{marginTop: "112px", display: "flex", justifyContent: "center"}}>
                                        <div style={{display: "flex", justifyContent: "left"}}>
                                            <Form.Check type="radio" checked={!disable}
                                                        onClick={(e) => setdisable(!disable)}/>
                                            <div style={{
                                                fontSize: "14px",
                                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                                fontWeight: "400",
                                                color: "#6E7184",
                                                lineHeight: "24px",
                                            }}>
                                                我已同意</div>
                                               <Button 
                                                onClick={() => setshowTiaokuan(true)}
                                                style={{
                                                    padding:"0",
                                                    backgroundColor:"white",
                                                    fontSize: "14px",
                                                    fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                                    fontWeight: "400",
                                                    borderRadius:"0",
                                                    borderLeft:0,
                                                    borderRight:0,
                                                    borderTop:0,
                                                    borderBottom:"1 solid #2346FF",
                                                    color: "#6E7184",
                                                    lineHeight: "24px",
                                                    marginLeft: "8px"
                                                }}>隐私政策和服务条款</Button>
                                            
                                        </div>


                                    </div>


                                    <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>

                                        <Button disabled={disable} style={{
                                            width: width > 288?  288 : "90%",
                                            height: "48px",
                                            border: "1px solid #F5F6F8", borderRadius: "4px 4px 4px 4px",
                                            boxShadow: disable ? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                                            textAlign: "center",
                                            backgroundColor: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                                        }}
                                                onClick={() => createTeam()}
                                        >
                                            <div style={{
                                                fontSize: "14px",
                                                fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                                fontWeight: "bold",
                                                color: disable ? "#C0C3CE" : "white",
                                                lineHeight: "24px",
                                            }}>
                                                创建团队
                                            </div>


                                        </Button>


                                    </div>


                                </> : <>

                                    <div style={{marginTop: "135px", display: "flex", justifyContent: "center"}}>
                                        <div style={{width: width > 800 ? "700px" : "90%"}}>
                                            <div style={{
                                                fontSize: "28px",
                                                fontFamily: "Microsoft YaHei U-Bold, Microsoft YaHei UI",
                                                fontWeight: "bold",
                                                color: "#2A2B30",
                                                lineHeight: "56px",
                                                letterSpacing: "1px"
                                            }}>
                                                {process[page].pagename}
                                            </div>
                                            <div style={{
                                                marginTop: "16px",
                                                fontSize: "18px",
                                                fontFamily: "Microsoft YaHei U-Regular, Microsoft YaHei UI",
                                                fontWeight: "400",
                                                color: "#2A2B30",
                                                lineHeight: "32px"
                                            }}>
                                                {page != 4 ? (<>{process[page].pagetext}</>) :
                                                    <>
                                                        赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。
                                                        <br/>“财经洞悉”将每两周举行一次，共计六次。
                                                        奖励：每次财经洞悉提交截止后，UFA组委会将对50份优秀分析通过邮件形式发放奖状，并对数个优秀学生进行独家采访。
                                                        <br/>“财经洞悉”作为投资比赛的附属活动，此板块不影响比赛分数。
                                                    </>
                                                }

                                            </div>

                                        </div>

                                    </div>

                                    <div style={{
                                        marginTop: page == 4 ? width> 600? "150px" : "110px" : width> 800? "280px" : "180px",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>

                                        <Button style={{
                                            width: width > 288?  288 : "90%",
                                            height: "48px",
                                            backgroundColor: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                                            border: "1px solid #F5F6F8",
                                            borderRadius: "4px 4px 4px 4px",
                                            boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                                        }}
                                                onClick={() => Pageprocess()}
                                        >
                                            <div style={{display: "flex", justifyContent: "right"}}>
                                                <div style={{
                                                    fontSize: "14px",
                                                    fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    lineHeight: "24px",
                                                    paddingRight: width > 288?  65 : 25,
                                                }}>
                                                    同意（{page - 1}/4）
                                                </div>
                                                <ArrowForward style={{color: "white"}}/>

                                            </div>

                                        </Button>

                                    </div>


                                </>}


                            </div>


                        </div>
                        <div style={{width: "48px", maxWidth: "18.75%"}}></div>
                    </div>


            }
            <div style={{ position: "relative", width:"100%" }}>
                <Footer />
            </div>

        </>


    )
}