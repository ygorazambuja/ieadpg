import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { CloseContainer, Container } from "./styles";

import debounce from "debounce";

interface DrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export function Drawer({ isOpen, onClose = () => {}, children }: DrawerProps) {
  const ref = useRef(null);
  const [closingDrawer, setClosingDrawer] = useState(false);

  function handleDrawerClose() {
    setClosingDrawer(true);
    debounce(onClose, 500)();

    setTimeout(() => {
      setClosingDrawer(false);
    }, 1000);
  }

  useOnClickOutside(ref, () => {
    handleDrawerClose();
  });

  return isOpen ? (
    <Container ref={ref} className={closingDrawer ? "closing" : ""}>
      <CloseContainer>
        <FiX onClick={handleDrawerClose} />
      </CloseContainer>

      {children}
    </Container>
  ) : null;
}
