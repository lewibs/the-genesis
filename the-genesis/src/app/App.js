import styled from "styled-components";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

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
      <Center>
        <Header/>
        <Body/>
        <Footer/>
      </Center>
    </Main>
  );
}

export default App;
