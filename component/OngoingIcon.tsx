import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { IconLoader, TablerIconsProps } from "@tabler/icons-react";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;

const Rotator = styled.span`
  display: inline-block;
  animation: ${spin} 2s linear infinite;
  transform-origin: center center;
  line-height: 1;
`;

const OngoingIcon = (props: TablerIconsProps) => {
  return (
    <Rotator>
      <IconLoader {...props} />
    </Rotator>
  );
};

export default OngoingIcon;
