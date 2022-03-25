import styled from 'styled-components';
import { teLoLlevamos } from '../../../constants/images';

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

const Btn = styled.button`
   width: fit-content;
   background-color: #fff;
   padding: 1rem 2rem;
   border: 1px solid var(--violet);
   color: var(--violet);
   border-radius: 5px;
   font-size: 0.9rem;
   font-weight: 600;
   text-transform: uppercase;
   cursor: pointer;
   transition: 0.3s ease;
   transition-property: color, background-color;

   &:hover {
      background-color: var(--violet);
      color: #fff;
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
               <Btn>Ver más</Btn>
            </Content>
         </Container>
      </a>
   );
};

export default PromotionCard;
