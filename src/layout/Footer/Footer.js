import styled from 'styled-components';
import Logo from '../../components/elements/Logo';
import SocialLink from '../../components/elements/SocialLink';

import {
   FaFacebook,
   FaInstagram,
   FaYoutube,
   FaTwitter,
   FaLinkedinIn,
} from 'react-icons/fa';
import { award, dataFiscal, selloCace } from '../../constants/images';

const Container = styled.footer`
   background-color: #fff;
   box-shadow: 0 0 0.5rem #ccc;
   padding: 5rem 1rem 1rem;

   .separator {
      border: none;
      border-bottom: 1px solid #ddd;
      margin: 1.5rem 0;
   }
`;

const Wrap = styled.div`
   max-width: 1280px;
   margin: 0 auto;
`;

const LogoStyled = styled(Logo)`
   min-width: auto;
   min-height: auto;
   width: 100%;
   height: 30%;
`;

const FirstSection = styled.section`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   gap: 2rem;
   font-size: 0.85rem;
   color: #555;

   a {
      color: #000;
      font-size: 1.1rem;
      font-weight: 700;
      display: inline-block;
      margin: 0.3rem 0;
   }
   p {
      margin: 0;
      line-height: 1.4;

      :first-child {
         font-size: 0.95rem;
         color: #000;
      }
   }
`;

const SecondSection = styled.section`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   gap: 2rem;

   section {
      h5 {
         margin: 0 0 0.5rem;
         font-size: 0.9rem;
         color: #444;
      }

      ul > li:not(:last-child) {
         margin-bottom: 0.5rem;
      }

      a {
         color: #777;
         font-size: 0.9rem;

         &:hover {
            text-decoration: underline;
         }
      }
   }

   form {
      label {
         font-size: 0.9rem;
         color: #777;
      }
      input[type='email'] {
         padding: 0.5rem;
         margin: 1rem 0;
         width: 100%;
         border: 1px solid #ccc;
         border-radius: 2px;

         &:focus-within {
            outline: none;
         }
      }
      input[type='submit'] {
         background-color: var(--violet);
         border: none;
         border-radius: 2px;
         color: #fff;
         font-weight: bolder;
         font-size: 0.8rem;
         text-transform: uppercase;
         padding: 0.7rem;
      }
   }
`;
const ThirdSection = styled.section`
   display: flex;
   gap: 1rem;

   div:nth-child(1) {
      width: 70%;

      > p:nth-child(1) {
         font-size: 0.8rem;
         color: #444;
         margin: 0;
      }

      > p:nth-child(2) {
         font-size: 0.75rem;
         color: #888;
         margin: 2rem 0 0;
      }
   }
   div:nth-child(2) {
      margin-inline-start: auto;

      display: flex;
      align-items: center;
      gap: 1rem;

      img:nth-child(1) {
         width: 64px;
      }
      img:nth-child(2) {
         width: 125px;
      }
      img:nth-child(3) {
         width: 40px;
      }
   }
`;
const SocialLinks = styled.div`
   display: flex;
   gap: 0.5rem;
   padding: 0.5rem 0;
`;

const Footer = () => {
   return (
      <Container>
         <Wrap>
            <FirstSection>
               <div>
                  <LogoStyled />
                  <SocialLinks>
                     <SocialLink
                        icon={<FaFacebook size="1rem" color="#fff" />}
                     />
                     <SocialLink
                        icon={<FaInstagram size="1rem" color="#fff" />}
                     />
                     <SocialLink
                        icon={<FaYoutube size="1rem" color="#fff" />}
                     />
                     <SocialLink
                        icon={<FaTwitter size="1rem" color="#fff" />}
                     />
                     <SocialLink
                        icon={<FaLinkedinIn size="1rem" color="#fff" />}
                     />
                  </SocialLinks>
               </div>
               <div>
                  <p>Atención al cliente:</p>
                  <a href="/">0810 999 3728</a>
                  <p>LU-VI de 09:00 a 18:00</p>
                  <p>SA de 9:00 a 13:00</p>
               </div>
               <div>
                  <p>Cobranza de créditos:</p>
                  <a href="/">0810 222 8368</a>
                  <p>LU-VI de 8:00 a 19:45</p>
               </div>
               <div>
                  <p>Venta telefónica:</p>
                  <a href="/">0810 333 8700</a>
                  <p>LU-VI de 8:00 a 20:00</p>
                  <p>SA-DO-Feriados 9:00 a 21:00</p>
               </div>
               <div>
                  <p>Servicios a empresas:</p>
                  <a href="/">Ventas corporativas</a>
               </div>
            </FirstSection>
            <hr className="separator" />
            <SecondSection>
               <form>
                  <label htmlFor="email">Recibir ofertas y promosiones</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Ingresa tu email"
                  />
                  <input type="submit" value="Suscribirme" />
               </form>
               <section>
                  <h5>Comprar en Frávega.com</h5>
                  <ul>
                     <li>
                        <a href="/">Servicio técnico</a>
                     </li>
                     <li>
                        <a href="/">Información legal</a>
                     </li>
                     <li>
                        <a href="/">Boton de arrepentimiento</a>
                     </li>
                  </ul>
               </section>
               <section>
                  <h5>Frávega créditos</h5>
                  <ul>
                     <li>
                        <a href="/">Pagá online</a>
                     </li>
                     <li>
                        <a href="/">Catálogo exclusivo</a>
                     </li>
                     <li>
                        <a href="/">Condiciones</a>
                     </li>
                  </ul>
               </section>
               <section>
                  <h5>Recomendados</h5>
                  <ul>
                     <li>
                        <a href="/">Smart TV</a>
                     </li>
                     <li>
                        <a href="/">Celulares</a>
                     </li>
                     <li>
                        <a href="/">Aire acondicionado</a>
                     </li>
                     <li>
                        <a href="/">Novedades</a>
                     </li>
                  </ul>
               </section>
               <section>
                  <h5>Ayuda</h5>
                  <ul>
                     <li>
                        <a href="/">Centro de ayuda</a>
                     </li>
                     <li>
                        <a href="/">Contactanos</a>
                     </li>
                     <li>
                        <a href="/">Sucursales</a>
                     </li>
                     <li>
                        <a href="/">Vendé en Frávega</a>
                     </li>
                     <li>
                        <a href="/">Trabajá con nosotros</a>
                     </li>
                  </ul>
               </section>
               <section>
                  <h5>Beneficios</h5>
                  <ul>
                     <li>
                        <a href="/">Club Personal</a>
                     </li>
                     <li>
                        <a href="/">YPF</a>
                     </li>
                     <li>
                        <a href="/">365</a>
                     </li>
                     <li>
                        <a href="/">Club Movistar</a>
                     </li>
                  </ul>
               </section>
            </SecondSection>
            <hr className="separator" />
            <ThirdSection>
               <div>
                  <p>
                     <span>
                        Copyright 2021 | Todos los derechos reservados
                        Fravega.com.
                     </span>
                     <span>
                        Frávega S.A.C.I. e I. Valentín Gómez 2813 (1191) |
                        Capital Federal | Argentina
                     </span>
                  </p>
                  <p>
                     Las fotos son a modo ilustrativo. La venta de cualquiera de
                     los productos publicados está sujeta a la verificación de
                     stock. Los precios online y los planes de financiación para
                     los productos presentados/publicados en www.fravega.com.ar
                     y/o www.fravega.com son válidos exclusivamente para la
                     compra vía internet en las páginas antes mencionadas. Las
                     especificaciones técnicas y descripciones están sujetas a
                     cambios sin previo aviso.
                  </p>
               </div>
               <div>
                  <img src={award} alt="" />
                  <img src={selloCace} alt="" />
                  <img src={dataFiscal} alt="" />
               </div>
            </ThirdSection>
         </Wrap>
      </Container>
   );
};

export default Footer;
