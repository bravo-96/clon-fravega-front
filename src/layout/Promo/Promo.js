import styled from 'styled-components';
import PromotionCard from '../../components/blocks/PromotionCard/PromotionCard';
import { promocionImg1, promocionImg2 } from '../../constants/images';

const Container = styled.section`
   display: flex;
   gap: 1rem;

   max-width: 1280px;
   margin: 4rem auto;
   padding: 0 1rem;

   > a {
      width: 100%;
   }
`;

const Promo = () => {
   return (
      <Container>
         <PromotionCard
            img={promocionImg1}
            titulo="Decubrilas"
            descripcion="No te pierdas las mejores ofertas al precio más bajo"
         />
         <PromotionCard
            img={promocionImg2}
            titulo="Semana de descanso"
            descripcion="Hasta 45% off y 18 sin interes en colchones, sommiers, almohadas y mucho más."
            colorTheme="violet"
         />
      </Container>
   );
};

export default Promo;
