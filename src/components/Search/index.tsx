import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  margin: 0 auto;
  width: 550px;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  background-color: #fff;

  > i {
    color: #777;
    font-size: 18px;
    cursor: pointer;
    margin-right: 1rem;
  }
`;

const InputSearch = styled.input`
  width: 100%;
  border: none;
  align-self: center;
`;

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = (props) => {
  return (
    <>
      <SearchWrapper>
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => console.log("Search")}
        />
        <InputSearch type="text" placeholder={props.placeholder} />
      </SearchWrapper>
    </>
  );
};

export default Search;
