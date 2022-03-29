import styled from 'styled-components';

export const BtnOutline = styled.button`
   width: fit-content;
   background-color: #fff;
   padding: 1rem 1.5rem;
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
