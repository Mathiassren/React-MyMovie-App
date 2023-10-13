import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import FavoriteIcon from "../components/FavoriteIcon";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 320px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const MovieData = useLoaderData();
  return (
    <>
      {MovieData.nowShowing.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle className="NowShowingHover">
            <figure className="image-container">
              <Image
                width="143"
                shadow={true}
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="Cover Image"
              />
              <div className="overlay d-flex align-items-center justify-center">
                <p>add to favorite</p>
                <FavoriteIcon />
              </div>
            </figure>
            <Heading
              title={
                data.title.length > 25
                  ? data.title.split(" ").slice(0, 3).join(" ") + "..."
                  : data.title
              }
              size="14"
              as="h3"
            />
            <Rating voteAverage={data.vote_average} />
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export default NowShowing;
