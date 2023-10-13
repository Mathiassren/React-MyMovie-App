import styled from "styled-components";
import { FaFilm, FaTicketAlt, FaRegBookmark } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #979797;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;

const linkStyle = {
  color: "#979797", // You can set the text color to your preference
};

const Navigation = () => {
  return (
    <StyledNav className="ease-in duration-300 dark:bg-stone-900">
      <FaFilm />
      <FaTicketAlt />
      <Link style={linkStyle} to="/favorite">
        <FaRegBookmark />
      </Link>
    </StyledNav>
  );
};

export default Navigation;
