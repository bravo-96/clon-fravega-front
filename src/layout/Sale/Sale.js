import styled from 'styled-components';
import Banner from '../../components/blocks/Banner/Banner';
import { bannerImg1, bannerImg2, bannerImg3 } from '../../constants/images';

const Container = styled.div`
   max-width: 1280px;
   margin: 0 auto 3rem;
   padding: 0 1rem;

   display: flex;
   gap: 1rem;
`;

const Sale = () => {
   return (
      <Container>
         <Banner
            img={bannerImg1}
            descripcion="REBAJAS ÚLTIMAS UNIDADES Aprovechalas con envío gratis en Capital y GBA en seleccionados."
            descuento="35"
         />
         <Banner
            img={bannerImg2}
            descripcion="FRÁVEGA HERRAMIENTAS hasta 6 sin interés y envío gratis en Capital y GBA en seleccionados."
            descuento="40"
         />
         <Banner
            img={bannerImg3}
            descripcion="Hasta 18 sin interés en heladeras, lavarropas, cocinas y purificadores seleccionados."
            descuento="30"
         />
      </Container>
   );
};

export default Sale;
