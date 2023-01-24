import styled from "styled-components";
import logo from "../images/Genesis Lecture Series transparent background (1920 × 692 px).png"
import background from "../images/christmas-snowy-background_1048-9078.webp"
import students from "../images/SCM Logo - Long (White).png";
import { tertiary } from "../style/colors";
import { minHeight } from "../style/clickable";
import { small } from "../style/gap";

const Img = styled.img`
    width: 100%;
    max-width: 800px;
`;

const Head = styled.header`
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${background}');
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${minHeight};
    width: 100%;
    background: ${tertiary};
    position: sticky;
    top: 0;
`;

const ImgLogo = styled.img`
    height: ${minHeight.replace("px","") - 5 + "px"};
    padding-left: 5px;
    padding-top: 5px;
`;

const Buttons = styled.div`
    display:flex;
    flex-direction:row;
`;

const Button = styled.button`
    background: rgba(0,0,0,0);
    height: ${minHeight};
    width: 100px;
    border: 0px solid black;
    border-left: 0px solid white;
    color:white;

    &:hover{
        cursor: pointer;
        filter: brightness(0.80);
    }
`;

const handleClickScroll = (id) => () => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export function Header() {

    return (
        <>
            <Head>
                <Img src={logo}/>
            </Head>
            <Nav>
                <a href={"https://shepherds.org/college/"}><ImgLogo src={students} /></a>
                <Buttons>
                    <Button onClick={handleClickScroll("where")}>Where</Button>
                    <Button onClick={handleClickScroll("what")}>What</Button>
                    <Button onClick={handleClickScroll("who")}>Who</Button>
                </Buttons>
            </Nav>
        </>
    )
}