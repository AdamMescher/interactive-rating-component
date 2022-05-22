import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Rating from "../Rating";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Rating />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: hsl(229deg 12% 9%);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export default App;
