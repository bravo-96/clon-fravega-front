import {
   Carousel,
   Categories,
   Features,
   Footer,
   Header,
   Offers,
   PayInfo,
   Promo,
   Sale,
   SaleSecondary,
} from './layout';
import styled from 'styled-components';

const Main = styled.main`
   background-color: #eee;
   padding-bottom: 0.1px;
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
            <Features tituloSeccion="Aprovechá las ofertas destacadas" />
            <Sale />
            <Features tituloSeccion="Todo lo Nuevo en Frávega. Hasta 40% OFF!" />
            <SaleSecondary />
         </Main>
         <Footer />
      </>
   );
};

export default FravegaApp;
