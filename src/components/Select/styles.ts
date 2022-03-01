import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  padding: 0.8rem 0;
  font-family: "PT-Sans", sans-serif;
  color: var(--label);
  font-weight: 400;
`;

export const StyledSelectContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
`;

export const StyledSelectDropdown = styled.div`
  max-height: 240px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: scroll;

  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

interface StyledSelectDropdownItemProps {
  active: boolean;
}

export const StyledSelectDropdownItem = styled.div<StyledSelectDropdownItemProps>`
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ active }) =>
    active ? "var(--green-light)" : "transparent"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px;
  z-index: 1;

  font-family: "PT-Sans", sans-serif;
  color: var(--label);
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 24px;
    width: 24px;
    border-radius: 8px;
    margin-right: 12px;

    border: 1px solid #b8b8b8;
  }
`;
