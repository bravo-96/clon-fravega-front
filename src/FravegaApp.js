import { Carousel, Categories, Header, Offers, PayInfo, Promo } from './layout';
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
            <Offers />
            <Promo />
         </Main>
      </>
   );
};

export default FravegaApp;
