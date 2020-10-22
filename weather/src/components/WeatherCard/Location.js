import React, { useState } from "react";
import styled from "styled-components";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, SetInputMode] = useState(true);

  if (inputMode) {
    return (
      <Container>
        <formElement
          onSubmit={(e) => {
            e.preventDefault();
            getWeather(query);
          }}
        >
          <InputField
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
          <CancelButton onClick={() => SetInputMode(false)}>x</CancelButton>
        </formElement>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => SetInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;

const formElement = styled.form`
  display: flex;
  position: relative;
  background: blue;
  border-radius: 5px;
`;

const InputField = styled.input`
  padding: 4px;
  width: 80px;
  background: transparent;
  color: white;
  border: none;
  &::focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  padding: 4px;
  background: blue;
  border: none;
  border-top-right-radius: 5px;
  color: white;
`;
const CancelButton = styled.span`
  font-size: 0.8rem;
  position: absolute;
  background: black;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  top: -10px;
  right: -18px;
`;

const City = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.6em;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
