import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  position: fixed;
  width: 24rem;

  z-index: 1;

  background-color: var(--blue);

  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;

  @keyframes identifier {
    0% {
      width: 0px;
      transform: translateX(0);
      opacity: 1;

      left: 0;
    }
    100% {
      width: 24rem;
    }
  }
  animation: identifier 0.4s ease-in-out;

  &.closing {
    @keyframes closeDrawer {
      0% {
        width: 24rem;
      }
      100% {
        width: 0px;
      }
    }
    animation: closeDrawer 0.6s ease-in-out;
  }
`;

export const CloseContainer = styled.div`
  padding: 8px;

  display: flex;
  justify-content: flex-end;

  svg {
    font-size: 24px;
    color: var(--shape);
  }
`;
