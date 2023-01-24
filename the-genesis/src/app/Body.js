import styled from "styled-components";
import { primary, secondary } from "../style/colors";
import { Main } from "../style/main";
import { small, medium } from "../style/gap";
import { big } from "../style/fonts";
import Gerald from "../images/Gerald Van Dyke Bio Pic.jpg"
import Dan from "../images/Dan Bio pic.jpg"

const WhenMain = styled(Main)`
    background: ${secondary};
`;

const WhatMain = styled(Main)`
    background: ${primary};
`;

const WhoMain1 = styled(Main)`
    background: ${secondary};
`;

const WhoMain2 = styled(Main)`
    background: ${primary};
`;

// const WhyMain = styled(Main)`
//     background: ${secondary};
// `;

const Text = styled.div`
    width: 100%;
`;

const TextHead = styled(Text)`
    font-size: ${big};
`;

const Name = styled(TextHead)`
    text-align: center;
`;

const TextContainer = styled(Main)`
    gap: ${small};
    max-width: 600px;
    box-sizing: border-box;
    padding: ${medium};
`;

const Img = styled.img`
    max-width:: 100%;
`;

const Anchor = styled.div`
    position: relative;
    top: -${medium}; 
`;

export function What({id}) {
    return (
        <WhatMain>
            <Anchor id={id}/>
            <TextContainer>
                <TextHead>What:</TextHead>
                <Text>
                    Join us for an engaging and informative discussion on the topic of creationism. 
                    Our panel of esteemed doctorates in life sciences will provide insightful presentations, 
                    followed by a Q&A session where you can ask questions. 
                    After the discussions, we'll have refreshments on hand to continue the conversation and connect with others.
                </Text>
                <Text>
                    All are welcome :)
                </Text>
            </TextContainer>
        </WhatMain>
    )
}

function When({id}) {
    return(
        <WhenMain>
            <Anchor id={id}/>
            <TextContainer>
                <TextHead>Where:</TextHead>
                <Text>
                    Friday, January 27 <br/>
                    7:00 pm <br/>
                    Talley Student Union 4140 <br/>
                </Text>
            </TextContainer>
        </WhenMain>
    );
}

function Who({id}) {
    const height = "400px";

    return(
        <>
        <WhoMain1>
            <Anchor id={id}/>
            <TextContainer>
                <TextHead>Who:</TextHead>
                <Name>Gerald Van Dyke, PhD</Name>
                <Img height={height} src={Gerald} />
                
                <ul>
                    <li>an Alumni Distinguished Undergraduate Professor Emeritus of NCSU, boasts a distinguished academic background with a B.S. in Botany from Eastern Illinois University, an M.S. and PhD in Plant Pathology from the University of Illinois.</li>
                    <li>joined NCSU in 1968 and made a significant impact during his tenure, retiring in 2006.</li>
                    <li>His expertise lies in the areas of plants and fungi and their interactions, both in teaching and research.</li>
                    <li>In addition to his academic pursuits, he is also a skilled wood carver.</li>
                </ul>
            </TextContainer>
        </WhoMain1>
        <WhoMain2>
            <TextContainer>
                <TextHead>Who:</TextHead>
                <Img height={height} src={Dan} />
                <Name>Dan Reynolds, PhD</Name>
                <ul>
                    <li>an Adjunct Professor at Southeastern Free Will Baptist College, is currently the Chairman of the Triangle Association for the Science of Creation.</li>
                    <li>He holds a BS in Chemistry from the University of Texas at San Antonio, and a PhD in Organic Chemistry from the University of Texas at Austin.</li>
                    <li>With over 30 years of experience in the pharmaceutical industry, he has a wealth of knowledge and expertise in his field.</li>
                    <li>In his free time, he enjoys exploring the origins of the universe, studying astronomy, cooking, camping, working with computers, walking, and photography.</li>
                </ul>
            </TextContainer>
        </WhoMain2>
        </>
    );
}

// function Why() {
//     return (
//         <WhyMain>
//             <TextContainer>
//                 <TextHead>Why:</TextHead>
//                 <Text>
                    
//                 </Text>
//             </TextContainer>
//         </WhyMain>
//     );
// }

export function Body() {
    return(
        <>
            <When id="where"/>
            <What id="what"/>
            <Who id="who" />
        </>
    )
}