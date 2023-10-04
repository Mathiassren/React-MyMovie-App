import styled from "styled-components";

const StyledSpan = styled.span`
  width: fit-content;
  padding: 4px 12px;
  background-color: #dbe3ff;
  color: #88a4e8;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 8px;
`;

const Label = (props) => {
  return (
    <StyledSpan className="ease-in duration-300 dark:text-indigo-200 dark:bg-indigo-900">
      {props.title}
    </StyledSpan>
  );
};

export default Label;
