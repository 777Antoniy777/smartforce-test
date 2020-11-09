import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";
import {visuallyHiddenStyle, BasedSiteWrapper} from "../app/based-styles";

const MainWrapper = styled.main`
  min-height: 100vh;
  background-image: linear-gradient(to right, ${ConstStyle.C_LIGHTBLUE} 50%, ${ConstStyle.C_LIGHTGRAY} 50%);
`;

const SiteWrapper = styled(BasedSiteWrapper)`
  display: flex;
  min-height: inherit;
`;

const Title = styled.h1`
  ${visuallyHiddenStyle}
`;

export {MainWrapper, SiteWrapper, Title};
