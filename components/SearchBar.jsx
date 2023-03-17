import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
// Animation for expanding the search bar
const expand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

// Animation for fading in the search button
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styles for the search bar container
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Styles for the search input field
const SearchInput = styled.input`
  width: 0;
  height: 2rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  animation: ${expand} 0.3s forwards;

  &:focus {
    border-color: #00CBCB;
  }
`;

// Styles for the search button
const SearchButton = styled.button`
  opacity: 0;
  margin-left: 0.5rem;
  padding: 0.25rem 1rem;
  border: solid;
  border-color:black;
  border-radius: 0.4rem;
  border-width: 1px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s forwards;

  &:hover {
    border-color: #00CBCB;
  }
`;

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState(null);
  const handleSearch = () => {
    // Do something with the search text
    // console.log(searchText);

    // FETCHING 30 ARTICLES BASED ON SEARCH 
    async function fetchSearch (){
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=30&language=en`)
        // console.log(response.data)
        setResults(response.data);
    }
    fetchSearch();
    
    
  };

  

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
