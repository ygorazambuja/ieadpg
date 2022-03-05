import { useMemo } from "react";
import { Container, Leading, Title, Trailing } from "./styles";

interface AppbarProps {
  title: string;
  leading?: React.ReactNode;
  onLeadingClick?: () => void;
  trailing?: React.ReactNode;
  onTrailingClick?: () => void;
}

export function Appbar({
  title = "Title",
  leading,
  trailing,
  onLeadingClick,
  onTrailingClick,
}: AppbarProps) {
  const hasTrailing = useMemo(() => !!trailing, [trailing]);
  const hasLeading = useMemo(() => !!leading, [leading]);

  return (
    <Container>
      {hasLeading && <Leading onClick={onLeadingClick}>{leading}</Leading>}
      <Title>{title}</Title>
      {hasTrailing && <Trailing onClick={onTrailingClick}>{trailing}</Trailing>}
    </Container>
  );
}
