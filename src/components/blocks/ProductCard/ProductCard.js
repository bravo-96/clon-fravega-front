import styled from 'styled-components';
import {
   cuotas12,
   cuotas18,
   cuotas3,
   cuotas6,
   envioGratis as envioGratisPng,
   planCanje as planCanjePng,
} from '../../../constants/images';

const Container = styled.div`
   padding: 1rem;
   height: 100%;
   text-align: center;
   background-color: #fff;
   transition: box-shadow 0.3s ease;

   ${({ hoverEffect }) =>
      hoverEffect && `&:hover{box-shadow: 0 0 0.3rem #999;}`}
`;
const Header = styled.div`
   height: 50%;
   position: relative;

   img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #fff;
      border-radius: 0.2rem;

      &:not(:first-child) {
         position: absolute;
         z-index: 500;
         width: 5rem;
         height: fit-content;
         background-color: transparent;
      }

      &.envio-gratis {
         top: 0;
         left: 0;
      }
      &.cuotas {
         bottom: 0;
         left: 0;
      }
      &.plan-canje {
         bottom: 0;
         right: 0;
      }
   }
`;
const Body = styled.div`
   h4 {
      color: #000;
      font-size: 1rem;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: -0.2px;
      overflow: hidden;
      height: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
   }
`;
const DiscountWrap = styled.div`
   width: fit-content;
   margin: 0 auto;

   display: flex;
   align-items: center;
   gap: 0.5rem;

   p:first-child {
      margin: 0;
      text-decoration: line-through;
      color: #888;
      font-size: 1.1rem;
   }
   p:last-child {
      margin: 0;
      line-height: 1;
      font-size: 0.9rem;
      font-weight: 500;
      min-width: fit-content;
      background-color: var(--magenta);
      padding: 3%;
      color: #fff;
   }
`;
const SalePrice = styled.p`
   font-size: 1.4rem;
   font-weight: 700;
   letter-spacing: -0.3px;
   line-height: 1;
   margin: 0.5rem 0 1rem;
`;
const Info = styled.div`
   div {
      width: fit-content;
      margin: 0 auto;
      padding: 1%;
      font-family: Arial;
      font-size: 0.8rem;
      font-weight: normal;
      background-color: rgb(239, 247, 242);
      color: rgb(32, 128, 65);
   }
   div:first-child {
      font-weight: bolder;
      margin-bottom: 0.5rem;
   }
`;

const ProductCard = ({
   img,
   titulo,
   precio,
   descuento,
   enStock,
   cuotas,
   envioGratis,
   planCanje,
   hoverEffect,
}) => {
   const getPrecioFinal = (precioStock, descuento) => {
      const precioFinal =
         descuento > 0 ? precioStock - precioStock * descuento : precioStock;

      return Math.floor(precioFinal).toLocaleString();
   };

   return (
      <Container hoverEffect={hoverEffect}>
         <Header {...envioGratis} {...cuotas} {...planCanje}>
            <img data-splide-lazy={img} alt={`Imagen de ${titulo}`} />
            {envioGratis && (
               <img src={envioGratisPng} alt="" className="envio-gratis" />
            )}
            {cuotas === 3 ? (
               <img src={cuotas3} alt="" className="cuotas" />
            ) : cuotas === 6 ? (
               <img src={cuotas6} alt="" className="cuotas" />
            ) : cuotas === 12 ? (
               <img src={cuotas12} alt="" className="cuotas" />
            ) : cuotas === 18 ? (
               <img src={cuotas18} alt="" className="cuotas" />
            ) : null}
            {planCanje && (
               <img src={planCanjePng} alt="" className="plan-canje" />
            )}
         </Header>

         <Body>
            <h4>{titulo}</h4>
            {descuento !== 0 && (
               <DiscountWrap>
                  <p>{precio.toLocaleString()}</p>
                  <p>{Math.floor(descuento * 100)}% OFF</p>
               </DiscountWrap>
            )}
            <SalePrice>&#36;{getPrecioFinal(precio, descuento)}</SalePrice>
            <Info {...enStock}>
               <div>Llega GRATIS mañana</div>
               {enStock && <div>¡Retiralo YA!</div>}
            </Info>
         </Body>
      </Container>
   );
};

export default ProductCard;
