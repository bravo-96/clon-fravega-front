import styled from 'styled-components';

const BtnStyled = styled.button`
   background-color: #fff;
   border: none;
   cursor: pointer;

   padding: 0.5rem;

   display: flex;
   align-items: center;

   gap: 0.5rem;

   font-size: 1rem;

   min-width: max-content;
`;

const Btn = ({ icon, text, fontSize }) => {
   return (
      <BtnStyled fontSize={fontSize}>
         {icon}
         {text}
      </BtnStyled>
   );
};

export default Btn;
