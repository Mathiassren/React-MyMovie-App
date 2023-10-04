import styled from "styled-components";

const StyledP = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 100;
`;

const Release = (props) => {
  return (
    <StyledP className="ease-in duration-300 dark:text-white">
      Release: {props.date}
    </StyledP>
  );
};

export default Release;
