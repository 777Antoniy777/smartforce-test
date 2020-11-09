import React from "react";
import {MainWrapper, SiteWrapper, Title} from "./styles";
import Data from "../data/data";

const Main = () => {
  return (
    <MainWrapper>
      <SiteWrapper>
        <Title>React App</Title>

        {/* Data screen */}
        <Data />

      </SiteWrapper>
    </MainWrapper>
  );
};

export default Main;
