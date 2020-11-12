import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";
import {visuallyHiddenStyle, BasedSiteWrapper} from "../app/based-styles";

const MainWrapper = styled.main`
  min-height: 100vh;
  background-color: ${ConstStyle.C_LIGHTGRAY};
`;

const SiteWrapper = styled(BasedSiteWrapper)`
  min-height: inherit;
  padding: 20px;
`;

const Title = styled.h1`
  ${visuallyHiddenStyle}
`;

export {MainWrapper, SiteWrapper, Title};
