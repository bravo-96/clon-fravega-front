import { FaTruck, FaStore, FaPhoneAlt, FaCommentAlt } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import styled from 'styled-components';
import { fravegaCreditos } from '../../constants/images';

const Container = styled.div`
   padding: 0.5rem;
   background-color: rgb(241, 241, 241);
   color: var(--ligth-gray-text);

   ul {
      max-width: 1280px;
      margin: 0 auto;

      display: flex;
      gap: 1.1%;
   }

   li {
      & a:hover {
         color: var(--dark-gray-text);
      }
      &:last-child {
         margin-inline-start: auto;
      }
   }

   a {
      color: inherit;
      text-decoration: none;
      font-size: 0.9rem;

      display: flex;
      align-items: center;
      gap: 0.3rem;

      transition: color 0.3s ease;
   }
`;

// ----------------------------------------------

const UpperLinks = () => {
   return (
      <Container>
         <ul>
            <li>
               <a href="/">
                  <FaTruck />
                  Seguí tu compra
               </a>
            </li>
            <li>
               <a href="/">
                  <GoGear />
                  Servicio técnico
               </a>
            </li>
            <li>
               <a href="/">
                  <FaStore />
                  Sucursales
               </a>
            </li>
            <li>
               <a href="/">
                  <FaPhoneAlt />
                  Venta telefónica
               </a>
            </li>
            <li>
               <a href="/">
                  <FaCommentAlt />
                  Centro de ayuda
               </a>
            </li>
            <li>
               <a href="/">
                  <img src={fravegaCreditos} alt="" />
               </a>
            </li>
         </ul>
      </Container>
   );
};

export default UpperLinks;
