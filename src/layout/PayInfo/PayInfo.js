import styled from 'styled-components';
import LinkText from '../../components/elements/LinkText/LinkText';
import {
   fravegaCreditosPng,
   fravegaEnvios,
   payMethods,
} from '../../constants/images';

const Container = styled.section`
   display: flex;
   justify-content: center;

   max-width: 1280px;
   margin-left: auto;
   margin-right: auto;

   padding: .5rem 0;

   article {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      min-width: max-content;
      padding: 0 1rem;
      font-size: 0.9rem;

      p {
         margin: .5rem 0;
      }
   }

   article:not(:last-child) {
      border-right: 1px solid #ddd;
   }

   article:nth-child(1) {
      img {
         max-width: 230px;
      }
   }
   article:nth-child(2) {
      img {
         max-width: 34px;
      }
   }
   article:nth-child(3) {
      img {
         max-width: 34px;
      }
   }
`;

const PayInfo = () => {
   return (
      <Container>
         <article>
            <img src={payMethods} alt="" />
            <p>
               Pagá con crédito y débito
               <br />
               <LinkText>Ver promosiones</LinkText>
            </p>
         </article>
         <article>
            <img src={fravegaCreditosPng} alt="" />
            <p>
               Frávega Créditos. <LinkText>Pagá Online.</LinkText>
               <br />
               <LinkText>Conocé más</LinkText> y accedé al{' '}
               <LinkText>catálogo exclusivo.</LinkText>
            </p>
         </article>
         <article>
            <img src={fravegaEnvios} alt="" />
            <p>
               Envíos a todo el país y retiro gratis
               <br />
               <LinkText>en más de 100 sucursales</LinkText>
            </p>
         </article>
      </Container>
   );
};

export default PayInfo;
