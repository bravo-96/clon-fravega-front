import styled from 'styled-components';
import { BtnOutline } from '../../elements/Btn';

const Container = styled.div`
   width: 100%;
   background-color: #fff;

   transition: box-shadow 0.3s ease;

   &:hover {
      box-shadow: 0 0.3rem 0.5rem 0.2rem #bbb;
   }

   a > p {
      color: #000;
      font-weight: 400;
      margin: 0;
      padding: 1rem;
   }

   a {
      ${({ orientacion }) =>
         orientacion === 'horizontal'
            ? `
            padding: 1rem 0;
            display: grid; 
            column-gap: 1.5rem;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: min-content;

            > p{
               font-size: 1.25rem;
               font-weight: bolder;
               padding: 0.5rem 0;
            }
            
            > p.titulo {
               color: #fff;
               padding: 0.5rem;
               background-color: var(--magenta);
               text-transform: uppercase;
               width: max-content;
               height: max-content;
            }
            `
            : ''}
   }
`;
const ImgContainer = styled.div`
   width: 100%;
   min-height: 160px;

   ${({ orientacion }) =>
      orientacion === 'horizontal' ? `grid-row: 1 / 4; min-height: 180px;` : ''}

   ${({ img }) => `background-image:url(${img});`}
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;

   & > div {
      position: absolute;
      top: 0;
      left: 1rem;
      display: grid;
      grid-template-columns: auto auto;
      background-color: var(--magenta);
      padding: 0.5rem;

      span {
         font-weight: bolder;
         text-transform: uppercase;
         color: #fff;
         line-height: 1;
      }

      span:nth-child(1) {
         grid-column: 1 / 3;
         font-size: 0.9rem;
      }
      span:nth-child(2) {
         grid-column: 1 / 2;
         grid-row: 2 / 4;
         font-size: 3rem;
      }
      span:nth-child(3) {
         grid-column: 2/ 3;
         font-size: 1.5rem;
      }
      span:nth-child(4) {
         grid-column: 2/ 3;
         font-size: 0.8rem;
      }
   }
`;

const Banner = ({ img, titulo, descripcion, descuento, orientacion }) => {
   return (
      <Container orientacion={orientacion}>
         <a href="/">
            <ImgContainer img={img} orientacion={orientacion}>
               {orientacion !== 'horizontal' && (
                  <div className="descuento-wrap">
                     <span>Hasta</span>
                     <span>{descuento}</span>
                     <span>%</span>
                     <span>OFF</span>
                  </div>
               )}
            </ImgContainer>
            {titulo && <p className="titulo">{titulo}</p>}
            <p>{descripcion}</p>
            {orientacion === 'horizontal' && <BtnOutline>Ver más</BtnOutline>}
         </a>
      </Container>
   );
};

export default Banner;
