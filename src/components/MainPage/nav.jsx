import {React,useState,useEffect} from 'react'
import { NavOut, NavbarContianer, NavLogo, MobileIcon, NavMenu
,NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { ViewHeadlineTwoTone } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import Image from 'react-bootstrap/Image';

const NavbarCreate = ({toggle}) => {
    const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        const handleScroll = () => {
          const bodyScrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          const scrolledDownEnough = bodyScrollTop > 85 ? true : false;
          setScrolledDownEnough(scrolledDownEnough);
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, [scrolledDownEnough]);

    return (
        <>
        <div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <h5 className="text-center">
            暂未上线，尽情期待
            </h5>
        </Modal.Body>
      </Modal>
      </div>

          <NavOut scrolledDownEnough={scrolledDownEnough}>  
            <NavbarContianer>
                {scrolledDownEnough? 
                <>
                <NavLogo scrolledDownEnough={scrolledDownEnough} to ='home'>
                <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"  roundedCircle  style={{ position: "relative", width: "7vh", height: "7vh",}}/>

                </NavLogo>
                <MobileIcon onClick ={() => toggle()}>
                <ViewHeadlineTwoTone  fontSize='large'/>
                </MobileIcon>
                </>
                : 
                (<>
                <NavLogo scrolledDownEnough={scrolledDownEnough} to ='home'></NavLogo>
            <MobileIcon onClick ={() => toggle()}>
                <ViewHeadlineTwoTone  fontSize='large'/>
            </MobileIcon>
            </>
            )  
            }

              
            <NavMenu>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} activeClass="active-block" to="home" spy={true} smooth={true} duration={700}>首页</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block" to="aboutus" spy={true} smooth={true} duration={700}>协会介绍</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block" to ="team" spy={true} smooth={true} duration={700}>团队介绍</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block" to ="review" spy={true} smooth={true} duration={700} >往届回顾</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} offset={-20} onClick={handleShow} activeClass="active-block" to ="/competition" spy={true} smooth={true} duration={700}>赛事</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} offset={-20} onClick={handleShow} activeClass="active-block" to ="/eplatform/:admin" spy={true} smooth={true} duration={700}>交易平台</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block" to ="contactus" spy={true} smooth={true} duration={700}>联系我们</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink scrolledDownEnough={scrolledDownEnough} to = "/eplatform/:Stock">
                    登录
                </NavBtnLink>
            </NavBtn>
            </NavbarContianer>   
          </NavOut>
            
        </>
    )
}

export default NavbarCreate;
