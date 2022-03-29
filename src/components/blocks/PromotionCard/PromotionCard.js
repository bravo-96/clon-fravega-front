import styled from 'styled-components';
import { teLoLlevamos } from '../../../constants/images';
import { BtnOutline } from '../../elements/Btn';

const Container = styled.div`
   padding: 1rem;

   color: #000;

   display: flex;
   height: 100%;
   align-items: center;
   gap: 1rem;

   transition: box-shadow 0.3s ease;

   &:hover {
      box-shadow: 0 0.5rem 0.5rem #bbb;
   }

   ${({ colorTheme }) =>
      colorTheme === 'violet'
         ? `background: linear-gradient(90deg, rgba(101, 75, 185, 0.8) 25%, #fff 25%);
         h3 { background-color: var(--violet); }`
         : `background: linear-gradient(90deg, rgba(186, 30, 146, 0.7) 25%, #fff 25%);h3 { background-color: var(--magenta);}`}

   > img {
      width: 35%;
   }
`;
const Content = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 1rem;
   > img {
      width: 100px;
   }

   h3 {
      padding: 0.5rem 1rem;
      font-size: 1.4rem;
      text-transform: uppercase;
      color: #fff;
      width: fit-content;
      margin: 0;
   }

   p {
      margin: 0;
      font-weight: bolder;
      font-size: 1.4rem;
   }
`;


const PromotionCard = ({ img, titulo, descripcion, colorTheme }) => {
   return (
      <a href="/">
         <Container colorTheme={colorTheme}>
            <img src={img} alt="Imagen de promocion" />
            <Content>
               <img src={teLoLlevamos} alt="" />
               <h3>{titulo}</h3>
               <p>{descripcion}</p>
               <BtnOutline>Ver más</BtnOutline>
            </Content>
         </Container>
      </a>
   );
};

export default PromotionCard;
