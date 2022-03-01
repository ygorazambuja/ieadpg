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

export const StyledSelect = styled.select`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 12px;
`;
