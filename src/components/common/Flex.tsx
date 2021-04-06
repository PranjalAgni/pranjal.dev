import styled from "styled-components";

type FlexProps = {
  justify: string;
  align?: string;
  nowrap?: string;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => (props.nowrap ? "no-wrap" : "wrap")};
`;

export default Flex;
