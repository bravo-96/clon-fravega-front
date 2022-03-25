import { Carousel, Categories, Header, PayInfo } from './layout';
import styled from 'styled-components';

const Main = styled.main`
   background-color: #eee;
`;

const FravegaApp = () => {
   return (
      <>
         <Header />
         <Carousel />
         <PayInfo />
         <Main>
            <Categories />
         </Main>
      </>
   );
};

export default FravegaApp;
