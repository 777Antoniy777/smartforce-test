import React from "react";
import {MainWrapper, SiteWrapper, Title} from "./styles";
import Form from "../form/form";
import Data from "../data/data";

const Main = () => {
  return (
    <MainWrapper>
      <SiteWrapper>
        <Title>React App</Title>

        {/* Form */}
        <Form />

        {/* Data screen */}
        <Data />

      </SiteWrapper>
    </MainWrapper>
  );
};

export default Main;
