import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

import ProductCard from '../../components/blocks/ProductCard/ProductCard';
import { products } from '../../constants/data';

const Container = styled.section`
   max-width: 1280px;
   margin: 0 auto 2rem;
   padding: 1rem;

   h2 {
      font-size: 1.5;
      font-weight: bolder;
      margin: 0 0 1rem;
   }
`;

const SplideStyled = styled(Splide)`
   .splide__arrow {
      background: none;
      transform: scale(1.5, 2.5);
      filter: drop-shadow(2px 0 white);

      &[disabled] {
         display: none;
      }
   }

   a {
      display: inline-block;
      height: 100%;
      text-decoration: none;
      color: #000;
      padding: 0.3rem;
   }
`;

const SlideStyled = styled(SplideSlide)`
   width: 100%;
`;

const Features = () => {
   return (
      <Container>
         <h2>Aprovechá las ofertas destacadas</h2>
         <SplideStyled
            options={{
               speed: 500,
               gap: 0,
               perPage: 5,
               perMove: 2,
               pagination: false,
               lazyLoad: 'nearby',
               arrowPath:
                  'M5.96253 38H1.77986L33.6393 19L1.86885 0H6.05152L38 19L5.96253 38Z',
            }}
         >
            {products.map((catg, idx) => {
               return (
                  <SlideStyled key={idx}>
                     <a href="/">
                        <ProductCard
                           hoverEffect={true}
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
      </Container>
   );
};

export default Features;
