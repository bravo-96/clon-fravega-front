import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

import { categoriesData } from '../../constants/data';

const SplideStyled = styled(Splide)`
   padding: 3rem 0;

   .splide__arrow {
      background: rgba(0, 0, 0, 0.2);
   }
`;

const SlideStyled = styled(SplideSlide)`
   width: 100%;

   img {
      width: 8rem;
      height: 8rem;
      background-color: #fff;
      border-radius: 50%;
   }
   a {
      cursor: pointer;
      transition: box-shadow 0.3s ease;

      color: #333;
      text-decoration: none;

      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover img {
         box-shadow: 0 0 0.5rem #ccc;
      }

      p {
         font-weight: 500;
         margin: 1rem 0 0;
      }
   }
`;

const Container = styled.div`
   max-width: 1280px;
   margin-left: auto;
   margin-right: auto;
`;

const Categories = () => {
   return (
      <Container>
         <SplideStyled
            options={{
               speed: 500,
               gap: '1px',
               perPage: 6,
               pagination: false,
            }}
         >
            {categoriesData.map((catg, idx) => {
               return (
                  <SlideStyled key={idx}>
                     <a href="/">
                        <img src={catg.img} alt={`Slide ${idx + 1}`} />
                        <p>{catg.nombre}</p>
                     </a>
                  </SlideStyled>
               );
            })}
         </SplideStyled>
      </Container>
   );
};
export default Categories;
