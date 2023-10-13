import styled from "styled-components";
import Heading from "../components/Heading";
import Rating from "../components/Rating";
import Image from "../components/Image";
import Label from "../components/Label";
import Release from "../components/Release";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
`;

const Popular = () => {
  const MovieData = useLoaderData();
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODU0ZWI7ODMxODdkN2VmMTk0MTdhMzMzYzUxZmQ4MyIsInN1YiI6IjY0NjFkZWI5NmUwZDcyMDBmZjRjMjI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TJEhXeG-5OOmJtyDrG9uvP9rUHJnKQvAWZJTGzHMrBE",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((data) => {
        // Create a mapping of genre names to their IDs
        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {MovieData.popular.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <Image
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              width="85"
              height="120"
            />
            <StyledSection>
              <Heading title={data.title} size="14" as="h3" />
              <Rating voteAverage={data.vote_average} />
              <StyledDiv>
                {data.genre_ids.map((genreId) => (
                  <Label key={genreId} title={genres[genreId]} />
                ))}
              </StyledDiv>
              <Release date={data.release_date} />
            </StyledSection>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export default Popular;
