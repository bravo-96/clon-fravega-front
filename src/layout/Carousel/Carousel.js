import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { slideImages } from '../../constants/data';

import '@splidejs/splide/dist/css/splide.min.css';

const SplideStyled = styled(Splide)`
   .splide__arrow {
      background: rgba(255, 255, 255, 0.2);
   }

   .splide__pagination {
      gap: 0.5rem;
   }
   .splide__pagination__page {
      width: 0.4rem;
      height: 0.4rem;
      background-color: #bbb;
   }
   .splide__pagination__page.is-active {
      width: 0.4rem;
      height: 0.4rem;
      background-color: #444;
   }
`;

const SlideStyled = styled(SplideSlide)`
   width: 100%;
   height: fit-content;

   img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: center;
   }
`;

const Carousel = () => {
   return (
      <div>
         <SplideStyled
            options={{
               autoWidth: true,
               lazyLoad: 'nearby',
               easing: 'linear',
               type: 'loop',
               speed: 500,
               interval: 5000,
               gap: '0',
               autoplay: true,
               pauseOnHover: true,
            }}
            hasSliderWrapper
         >
            {slideImages.map((image, idx) => {
               return (
                  <SlideStyled key={idx}>
                     <a href="/">
                        <img src={image} alt={`Slide ${idx + 1}`} />
                     </a>
                  </SlideStyled>
               );
            })}
         </SplideStyled>
      </div>
   );
};

export default Carousel;
