import styled from "styled-components"
import Gerald from "../images/Gerald Van Dyke Bio Pic.jpg"
import Dan from "../images/Dan Bio pic.jpg"
import { backB } from "./colors";

const height = "400px";

const Main = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    background: ${backB};
`;

const AboutSection = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    gap: 100px;
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width:100%;
    align-items:center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Name = styled.div`
    font-size: 2em; 
    margin: 10px;
`;

export function Body() {
    return <Main>
        <AboutSection>
            <About>
                <Name>Gerald Van Dyke</Name>
                <img height={height} src={Gerald} />
                <ul>
                    <li>Alumni Distinguished Undergraduate Professor, Emeritus NCSU</li>
                    <li>B.S. Botany, Eastern Illinois University</li>
                    <li>M.S. and PhD Plant Pathology, University of Illinois</li>
                    <li>Joined NCSU 1968, retired in 2006</li>
                    <li>Teaching and research areas: plants and fungi and their interactions</li>
                    <li>Wood carver</li>
                </ul>
            </About>
            <About>
                <Name>Dan Reynolds</Name>
                <img height={height} src={Dan} />
                <ul>
                    <li>Adjunct professor at Southeastern Free Will Baptist College</li>
                    <li>Currently the Chairman of the Triangle Association for the Science of Creation</li>
                    <li>BS Chemistry, University of Texas at San Antonio</li>
                    <li>PhD in Organic Chemistry, University of Texas at Austin</li>
                    <li>Over 30 years' experience in the pharmaceutical industry</li>
                    <li>Enjoys origins, astronomy, cooking, camping, computers, walking, and photography</li>
                </ul>
            </About>
        </AboutSection>
    </Main>
};