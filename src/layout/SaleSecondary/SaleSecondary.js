import styled from 'styled-components';
import Banner from '../../components/blocks/Banner';
import { bannerImg4, bannerImg5 } from '../../constants/images';

const Container = styled.section`
   max-width: 1280px;
   margin: 0 auto 1rem;
   padding: 0 0.5rem;

   display: flex;
   gap: 2rem;
`;

const SaleSecondary = () => {
   return (
      <Container>
         <Banner
            img={bannerImg4}
            descripcion="FITNESS y MOVILIDAD: Hasta 6 sin interés y envío gratis en productos seleccionados."
            orientacion="horizontal"
            titulo="Hasta 50% OFF"
         />
         <Banner
            img={bannerImg5}
            descripcion="Aprovechalas con hasta 35% off y envio gratis en Capital y GBA en seleccionados."
            orientacion="horizontal"
            titulo="Útimal unidades"
         />
      </Container>
   );
};

export default SaleSecondary;
