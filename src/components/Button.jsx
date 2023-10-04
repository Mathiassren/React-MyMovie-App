import styled from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  height: 21px;
  background-color: white;
  color: #aaa9b1;
  border: solid 1px;
  border-color: #aaa9b1;
  border-radius: 25px;
  font-size: 10px;
`;

const Button = (props) => {
  return (
    <StyledButton className="dark:border-none dark:text-indigo-200 dark:bg-indigo-900 ease-in duration-300">
      {props.title}
    </StyledButton>
  );
};

export default Button;
