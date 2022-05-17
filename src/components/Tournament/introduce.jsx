import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./introduce.css";
import useWindowDimensions from "../../utils/sizewindow";

export default function Introduce() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="introduce">
      <div className="introduce-content gray-bg">
        <div className="introduce-mark">
          <div className="top-image">
            <Image
              src="/tournament/Group 110.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <div className="center-content">
            大赛旨在为全球华人大学生提供知识实践以及投资学习的平台支持，鼓励大学生以知促行，以行促知，培养创新精神与实践能力，推动金融创新人才培养机制的建立。大赛愿景希望联结全球未来华人精英，共同建设祖国金融未来。
          </div>
          <div className="bottom-image">
            <Image
              src="/tournament/Group 172.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
        </div>
      </div>
      {/* 比赛流程 */}
      <div className="match white-bg">
        <div className="left">
          <div className="match-text">比赛流程</div>
          <div className="left-round">
            <div className="round">
              <div className="time-wrapper">
                <div className="month">6.6</div>
                <div className="year">2022</div>
              </div>
            </div>
            <div className="left-line"></div>
            <div className="icon-wrapper">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="match-end">
            <div className="match-end-text">初赛结束</div>
            <div className="match-end-content">
              <div>第一轮：指标分数（权重60%）</div>
              <div>综合分数 = 0.6*年化收益率（标准化后）+ 0.4*夏普比例</div>
              <div>（标准化后）</div>
            </div>
          </div>

          <div className="flex-end" style={{ marginTop: "145px" }}>
            <div className="month">9.7</div>
            <div className="right-line bg"></div>
            <div className="icon-wrapper">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="match-end" style={{ marginTop: "168px" }}>
            <div className="match-end-text">投资报告提交截止</div>
          </div>

          <div className="flex-end" style={{ marginTop: "143px" }}>
            <div className="month">9.12</div>
            <div className="right-line bg"></div>
            <div className="icon-wrapper">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="match-end" style={{ marginTop: "161px" }}>
            <div className="match-end-text">决赛（全网直播）</div>
            <div className="match-end-content">
              <div>
                决赛选手将进行10-20分钟线上投资报告展示（具体展示模版将在初赛结束后公布），评委对其专业能力，以及综合素质进行打分。最终将结合初赛的指标分数（权重40%）以及决赛评委分数（权重60%）作出最终排名。
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="match-begin">
            <div className="right-line"></div>
            <div className="match-begin-text">比赛开始</div>
          </div>

          <div className="flex-start" style={{ marginTop: "247px" }}>
            <div className="icon-wrapper-left">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="right-line bg"></div>
            <div className="month" style={{ paddingLeft: "16px" }}>
              9.2
            </div>
          </div>

          <div className="finals-name">
            <div className="right-line"></div>
            <div className="finals-name-container">
              <div className="match-end-text" style={{ textAlign: "left" }}>
                公布决赛名单
              </div>
              <div className="match-end-content" style={{ textAlign: "left" }}>
                <div>第二轮：投资报告（权重40%）</div>
                <div>
                  由综合分数排名前100名的选手提交一份逻辑报告。UFA评委综合逻辑报告，以及各项指标筛选出15名入围决赛选手。
                </div>
              </div>
            </div>
          </div>

          <div className="flex-start" style={{ marginTop: "120px" }}>
            <div className="icon-wrapper-left">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="right-line bg"></div>
            <div className="month" style={{ paddingLeft: "16px" }}>
              9.10
            </div>
          </div>

          <div className="flex-start" style={{ marginTop: "143px" }}>
            <div className="right-line"></div>
            <div className="match-begin-text">UFA评委评选决赛</div>
          </div>

          <div className="flex-start" style={{ marginTop: "143px" }}>
            <div className="icon-wrapper-left">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="right-line bg"></div>
            <div className="left-round" style={{ marginTop: "0px" }}>
              <div className="round">
                <div className="time-wrapper" style={{ padding: width > 1350 ? "80px 20px" : width > 900 ? '70px 10px' : '60px 15px' }}>
                  <div className="month">9.17</div>
                  <div className="year">2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 比赛奖项 */}

      <div className="match-awards-container gray-bg">
        <div className="awards-content">
          <div className="awards-title-wrapper">
            <div className="awards-title">比赛奖项</div>
            <div className="awards-text">
              量化赛道与主观多头赛道分开进行排名和奖励
            </div>
          </div>

          <div className="awards-card-wrapper">
            <div className="awards-card-container">
              <div className="awards-card">
                <div className="ranking awards-center">第一名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得10000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>

            <div
              className="awards-card-container"
              style={{ margin:  width > 1400 ? "0px 60px" : "0px 50px" }}
            >
              <div className="awards-card">
                <div className="ranking awards-center">第二名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得8500元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>

            <div className="awards-card-container">
              <div className="awards-card">
                <div className="ranking awards-center">第三名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得7000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="awards-center flex-center"
            style={{ marginTop: "60px" }}
          >
            <div className="awards-card-container">
              <div className="awards-card">
                <div className="ranking awards-center">第五至十名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得6000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>
          </div>

          <div className="other-awards">
            <Image
              src="/tournament/Group 208.png"
              style={{ width: "87%", height: "100%" }}
            />
          </div>

          <div className="awards-card-wrapper">
            <div className="awards-card-container">
              <div className="awards-card">
                <div className="ranking awards-center">UFA优秀投资笔记奖</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得5000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>

            <div
              className="awards-card-container"
              style={{ margin: "0px 60px" }}
            >
              <div className="awards-card">
                <div className="ranking awards-center">UFA优秀研报奖</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得5000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>

            <div className="awards-card-container">
              <div className="awards-card">
                <div className="ranking awards-center">UFA未来优秀投资者</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得5000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tips">
            注：所有奖项由UFA与中信证券官方签署制定，旨在为参赛选手提供背景提升，学习成长的机会。
          </div>
        </div>
      </div>
    </div>
  );
}