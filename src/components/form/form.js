import React from "react";
import {Wrapper, SearchWrapper, InputWrapper} from "./styles";

const Form = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <form action="#" method="GET">
          <InputWrapper>
            <label htmlFor="search">User name</label>
            <input type="search" id="search" name="search" placeholder="Type user name" />
          </InputWrapper>
        </form>
      </SearchWrapper>
    </Wrapper>
  );
};

export default Form;
