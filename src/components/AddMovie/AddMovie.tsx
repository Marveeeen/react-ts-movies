import React, { FormEvent, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../../constants";
import { TResponseData } from "../../hooks/type";
import { useAxiosHandler } from "../../hooks/useAxiosHandler";

import { Button } from "../../styles";

import {
  FormControl,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./styles";
import { TAddMovieProps, TSentMovie } from "./types";

const AddMovie = ({ onAddMovie }: TAddMovieProps) => {
  const { sendRequest: sendMovieRequest } = useAxiosHandler();

  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  const createMovie = (movie: TSentMovie, movieData: TResponseData) => {
    const generatedId: string = movieData.name as unknown as string;
    const createdMovie = { id: generatedId, ...movie };

    onAddMovie(createdMovie);
  };

  const submitMovieRequestHandler = async (movie: TSentMovie) => {
    sendMovieRequest(
      {
        url: API_URL,
        method: "POST",
        body: movie,
      },
      createMovie.bind(null, movie)
    );
  };

  const resetForm = () => {
    if (titleRef.current && openingTextRef.current && releaseDateRef.current) {
      titleRef.current.value = "";
      openingTextRef.current.value = "";
      releaseDateRef.current.value = "";
    }
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const movie = {
      title: titleRef?.current?.value ?? "",
      openingText: openingTextRef?.current?.value ?? "",
      releaseDate: releaseDateRef?.current?.value ?? "",
    };

    submitMovieRequestHandler(movie);
    resetForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <StyledLabel htmlFor="title">Title</StyledLabel>
        <StyledInput type="text" id="title" ref={titleRef} />
      </FormControl>
      <FormControl>
        <StyledLabel htmlFor="opening-text">Opening Text</StyledLabel>
        <StyledTextArea
          rows={5}
          id="opening-text"
          ref={openingTextRef}
        ></StyledTextArea>
      </FormControl>
      <FormControl>
        <StyledLabel htmlFor="date">Release Date</StyledLabel>
        <StyledInput type="text" id="date" ref={releaseDateRef} />
      </FormControl>
      <Button>Add Movie</Button>
    </form>
  );
};

export default AddMovie;
