import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

import CardProduct from '../../components/blocks/CardProduct/CardProduct';
import { products } from '../../constants/data';

const Container = styled.section`
   max-width: 1280px;
   margin: 0 auto;
   padding: 0 1rem;
`;
const Wrap = styled.section`
   background-color: #fff;
   padding: 0 1rem 0;
   box-shadow: 0 0 0.3rem #bbb;
   border-radius: 0.2rem;
`;

const SectionName = styled.h2`
   color: #fff;
   font-size: 2rem;
   font-weight: 700;
   text-transform: uppercase;
   background-image: linear-gradient(-90deg, rgb(211, 0, 152), rgb(68, 0, 153));
   width: fit-content;
   padding: 0.5rem 1rem;
   margin: 0;
`;

const SplideStyled = styled(Splide)`
   padding: 1rem 0 0;

   .splide__arrow {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-220%) scale(2);
   }

   a {
      display: inline-block;
      height: 100%;
      text-decoration: none;
      color: #000;
   }
`;

const SlideStyled = styled(SplideSlide)`
   width: 100%;
`;

const Ofertas = () => {
   return (
      <Container>
         <Wrap>
            <SectionName>ofertas por tiempo limitado</SectionName>
            <SplideStyled
               options={{
                  speed: 1000,
                  gap: '0.5rem',
                  perPage: 4,
                  pagination: false,
               }}
            >
               {products.map((catg, idx) => {
                  return (
                     <SlideStyled key={idx}>
                        <a href="/">
                           <CardProduct
                              key={catg.id}
                              img={catg.img}
                              titulo={catg.titulo}
                              precio={catg.precioStock}
                              precioFinal={catg.precioFinal}
                              descuento={catg.descuento}
                              envioGratis={catg.envioGratis}
                              cuotas={catg.cuotas}
                              enStock={catg.enStock}
                              planCanje={catg.planCanje}
                           />
                        </a>
                     </SlideStyled>
                  );
               })}
            </SplideStyled>
         </Wrap>
      </Container>
   );
};

export default Ofertas;
