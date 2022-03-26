import {
   Carousel,
   Categories,
   Features,
   Header,
   Offers,
   PayInfo,
   Promo,
} from './layout';
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
            <Features />
         </Main>
      </>
   );
};

export default FravegaApp;
