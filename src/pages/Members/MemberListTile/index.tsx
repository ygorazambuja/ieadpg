import { FiArrowRight } from "react-icons/fi";
import { Avatar } from "../../../components/Avatar";
import { IconButton } from "../../../components/IconButton";
import { Member } from "../../../entities/member";
import { Column, Row } from "../../../styles/global";
import { Container, Name, Role } from "./styles";

type MemberListTileProps = {
  member: Member;
  onClick?: (member: Member) => void;
};

export function MemberListTile({
  member,
  onClick = (member) => {},
}: MemberListTileProps) {
  return (
    <Container
      onClick={() => {
        onClick(member);
      }}
    >
      <Row>
        <Column>
          <Avatar src={"https://i.pravatar.cc/300"} />
        </Column>
        <Column style={{ flex: 1, justifyContent: "center" }}>
          <Name>{member.name}</Name>
          <Role>{member.role}</Role>
        </Column>
        <Column style={{ flex: 0.1, justifyContent: "center" }}>
          <IconButton icon={<FiArrowRight />} onClick={() => onClick(member)} />
        </Column>
      </Row>
    </Container>
  );
}
