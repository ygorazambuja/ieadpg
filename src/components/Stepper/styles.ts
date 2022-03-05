import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-around;

  svg {
    font-size: 18px;
  }

  padding: 8px 0px;
`;

type StepProps = {
  active?: boolean;
  completed?: boolean;
};

export const Step = styled.div<StepProps>`
  display: flex;

  align-items: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid var(--label);
    border-radius: 50%;
    width: 40px;
    height: 40px;

    font-weight: bold;
    font-size: 12px;

    margin-right: 8px;

    ${({ active }) =>
      active &&
      `
        color: var(--shape);
        background-color: var(--blue);
    `}

    ${({ completed }) =>
      completed &&
      `
        color: var(--shape);
        background-color: var(--green);
    `}
  }

  & span {
    font-size: 14px;
    margin-right: 12px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
