import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
`;

const Center = styled.div`
  max-width: 800px;
`;

function App() {
  return (
    <Main>
        <Header/>
        <Body/>
        <Footer/>
    </Main>
  );
}

export default App;
