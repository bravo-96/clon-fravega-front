import {
   Carousel,
   Categories,
   Features,
   Header,
   Offers,
   PayInfo,
   Promo,
   Sale,
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
            <Features tituloSeccion="Aprovechá las ofertas destacadas" />
            <Sale />
            <Features tituloSeccion="Todo lo Nuevo en Frávega. Hasta 40% OFF!" />
         </Main>
      </>
   );
};

export default FravegaApp;
