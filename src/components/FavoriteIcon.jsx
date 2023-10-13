// Importerer nødvendige biblioteker og komponenter fra React og React Router.
import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFavorite } from "../hooks/useFavorite"; // Bruger en brugerdefineret hook til at hente foretrukne data.

// Opretter en komponent kaldet 'FavoriteIcon'.
const FavoriteIcon = () => {
  // Henter 'id' fra URL'en ved hjælp af React Router. 'id' repræsenterer en unik identifikator.
  const { id } = useParams();

  // Bruger den brugerdefinerede 'useFavorite' hook til at hente oplysninger om en genstand baseret på dens 'id'.
  const favorite = useFavorite(parseInt(id));

  // Opretter en tilstand (state) kaldet 'bookmarked' og initialiserer den med 'undefined'.
  // 'bookmarked' vil holde styr på, om en genstand er blevet bogmærket eller ej.
  const [bookmarked, setBookmarked] = useState(undefined);

  // Bruger 'useEffect' til at lytte efter ændringer i 'favorite' og opdatere 'bookmarked' tilstanden, hvis der er foretrukne oplysninger tilgængelige.
  useEffect(() => {
    if (favorite) {
      setBookmarked(favorite);
    }
  }, [favorite]);

  // Opretter en tilstand (state) kaldet 'render' og initialiserer den til 'false'.
  // Denne tilstand vil blive brugt til at afgøre, om noget skal vises på skærmen senere.

  const [render, setRender] = useState(false);

  // Bruger 'useEffect' igen til at udføre en handling, når 'render' er 'true'.
  // Denne handling involverer at sende data til en ekstern tjeneste (API).

  useEffect(() => {
    // Hvis 'render' er 'true', udfør følgende handlinger.
    if (render) {
      // Opretter 'options', der indeholder indstillinger for en HTTP POST-anmodning til en API.
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: id,
          favorite: bookmarked,
        }),
      };

      // Sender POST-anmodningen til en bestemt URL.
      fetch("https://api.themoviedb.org/3/account/19479165/favorite", options)
        .then((response) => response.json()) // Behandler svaret fra API'en som JSON-data.
        .then((response) => console.log(response)) // Logger svaret til konsollen.
        .catch((err) => console.error(err)); // Håndterer eventuelle fejl under anmodningen.
    }

    // Sætter 'render' tilstanden til 'true'. Dette vil udløse 'useEffect' igen, men kun én gang.
    setRender(true);
  }, [bookmarked]); // 'useEffect' udløses, når 'bookmarked' ændres.

  // Returnerer en visuel komponent, der inkluderer et bogmærkeikon, som kan klikkes på.
  return (
    <span
      onClick={() => {
        setBookmarked(!bookmarked); // Skifter bogmærkestatusen (fra bogmærket til ikke-bogmærket eller omvendt), når brugeren klikker på ikonet.
      }}
    >
      {bookmarked ? <FaBookmark /> : <FaRegBookmark />}{" "}
      {/* Viser enten et fyldt bogmærkeikon eller et tomt bogmærkeikon baseret på bogmærkestatus. */}
    </span>
  );
};

// Eksporterer 'FavoriteIcon' komponenten, så den kan bruges andre steder i applikationen.
export default FavoriteIcon;
