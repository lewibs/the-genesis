import styled from "styled-components";
import logo from "../images/Genesis Lecture Series transparent background (1920 × 692 px).png"
//import background from "../images/walking-dogs-park-people-take-care-their-dogs-beautiful-green-park_613284-280.webp"
import { backA } from "./colors";

const Main = styled.header`
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${backA};
`;

const Img = styled.img`
    object-fit: contain;
    width: 100%;
`;

const Date = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 1.3em;
    margin:30px;
`;

const BAM = styled.div`
`;

export function Header() {
    return (
        <Main>
            <Img src={logo}/>
            <BAM>
                <Title>Evolution and Christianity</Title>
                <Date>
                    <div>Friday, January 27</div>
                    <div>7:00 pm</div>
                    <div>Talley Student Union 4140</div>
                </Date>
            </BAM>
        </Main>
    )
}