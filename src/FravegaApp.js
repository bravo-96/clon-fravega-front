import { Carousel, Categories, Header, PayInfo } from './layout';
import styled from 'styled-components';
import Ofertas from './layout/Ofertas';

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
            <Ofertas />
         </Main>
      </>
   );
};

export default FravegaApp;
