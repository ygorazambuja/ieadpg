import { Container, StyledLabel, StyledSelect } from "./styles";

interface Option {
    value: string;
    label: string;
}

interface RadioProps {
    label: string;
    options: Option[];
}

export function Radio({ label, options }: RadioProps) {
    return (
        <Container>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelect>
                {options.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </StyledSelect>
        </Container>
    );
}
