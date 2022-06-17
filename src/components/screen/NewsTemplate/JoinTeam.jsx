
import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { officialEmail } from 'constants/maps';

export default function JoinTeam({name, id}){
    return(
        <>
        <div>
        恭喜您！您的申请已经得到<strong>{name}</strong>队长的确认，您将以队员身份成功报名UFA第二届模拟投资挑战赛。
        请扫码添加UFA赛事小助手:（若群已满，联系队长拉您进群）
        </div>
        <br/>

        <div style={{display:"flex",justifyContent:"center"}}>
        <Image
         src ={"/小助手.jpg"}
         style={{width:"200px", height:"200px"}}
         />
         </div>
        <br/>
        <br/>
        <div>
          {/* <span style={{color:"blue"}}>有任何疑问请联系小助手</span>  */}
          或发送邮箱至 <span style={{color:"red"}}>{officialEmail}</span>
        </div>
        <br/>
              UFA 组委会
        </>
    )
}