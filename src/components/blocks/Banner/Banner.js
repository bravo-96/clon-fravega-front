import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
   transition: box-shadow 0.3s ease;

   &:hover {
      box-shadow: 0 0.3rem 0.5rem 0.2rem #bbb;
   }

   a > p {
      color: #000;
      font-weight: 400;
      background-color: #fff;
      margin: 0;
      padding: 1rem;
   }
`;
const ImgContainer = styled.div`
   width: 100%;
   height: 160px;

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

const Banner = ({ img, descripcion, descuento, orientacion }) => {
   return (
      <Container>
         <a href="/">
            <ImgContainer img={img}>
               {!orientacion && (
                  <div className="descuento-wrap">
                     <span>Hasta</span>
                     <span>{descuento}</span>
                     <span>%</span>
                     <span>OFF</span>
                  </div>
               )}
            </ImgContainer>
            <p>{descripcion}</p>
         </a>
      </Container>
   );
};

export default Banner;
