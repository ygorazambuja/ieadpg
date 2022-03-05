import { useMemo, useRef, useState } from "react";
import {
  Container,
  StyledSelectContainer,
  StyledLabel,
  StyledSelectDropdown,
  StyledSelectDropdownItem,
} from "./styles";

import { FiCheck } from "react-icons/fi";
import { ThemeColors } from "../../styles/global";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  value?: Option;
  setValue: (value: Option) => void;
  placeholder?: string;
}

export function Select({
  label,
  options,
  value,
  setValue,
  placeholder,
}: SelectProps) {
  const ref = useRef(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function toggleSelectOpen() {
    setIsSelectOpen(false);
  }

  function handleSelectOpen() {
    setIsSelectOpen(true);
  }

  function isOptionActive(option: Option) {
    return value?.value === option.value;
  }

  const hasValueInInput = useMemo(() => {
    return !!value?.value;
  }, [value]);

  useOnClickOutside(ref, toggleSelectOpen);

  return (
    <Container ref={ref}>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelectContainer onClick={handleSelectOpen}>
        {hasValueInInput && value?.label}
        {!hasValueInInput && <span>{placeholder}</span>}
      </StyledSelectContainer>
      {isSelectOpen && (
        <StyledSelectDropdown>
          {options.map((option) => (
            <StyledSelectDropdownItem
              key={option.label}
              onClick={() => setValue(option)}
              active={isOptionActive(option)}
            >
              <div>
                {isOptionActive(option) && (
                  <FiCheck size={"24px"} color={ThemeColors.green} />
                )}
              </div>
              {option.label}
            </StyledSelectDropdownItem>
          ))}
        </StyledSelectDropdown>
      )}
    </Container>
  );
}
