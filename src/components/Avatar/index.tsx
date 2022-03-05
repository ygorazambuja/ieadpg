import { Container } from "./styles";

type AvatarProps = {
  src: string;
  alt?: string;
};

export function Avatar({ src, alt = "Avatar" }: AvatarProps) {
  return (
    <Container>
      <img src={src} alt={alt}></img>
    </Container>
  );
}
