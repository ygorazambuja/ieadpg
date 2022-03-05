import { useCallback, useEffect, useState } from "react";
import {
  FiFilter,
  FiMenu,
  FiMoreVertical,
  FiPlus,
  FiShare,
} from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Appbar } from "../../components/Appbar";
import { Drawer } from "../../components/Drawer";
import { ListTile } from "../../components/ListTile";
import { Member } from "../../entities/member";
import { getAllMembers } from "../../services/firebase/members.firebase";
import { MemberListTile } from "./MemberListTile";
import { Container } from "./styles";

export function Members() {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMemberDrawerOpen, setIsMemberDrawerOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    getAllMembers().then((data) => {
      setMembers(data);
    });
  }, []);

  function handleRedirectToDetails(member: Member) {
    history.push(`/members/${member.id}`);
  }

  return (
    <>
      <Appbar
        title="Membros"
        leading={<FiMenu />}
        onLeadingClick={() => {
          setIsDrawerOpen(true);
        }}
        trailing={<FiMoreVertical />}
        onTrailingClick={() => {
          setIsMemberDrawerOpen(true);
        }}
      />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <Drawer
        isOpen={isMemberDrawerOpen}
        onClose={() => setIsMemberDrawerOpen(false)}
      >
        <ul>
          <ListTile
            onClick={() => {
              history.push("/new-member");
            }}
          >
            <FiPlus />
            <span>Adicionar membro</span>
          </ListTile>
          <ListTile>
            <FiShare />
            <span>Importar</span>
          </ListTile>
          <ListTile>
            <FiFilter />
            <span>Filtros</span>
          </ListTile>
        </ul>
      </Drawer>

      <Container>
        {members.map((member) => (
          <MemberListTile
            key={member.id}
            member={member}
            onClick={handleRedirectToDetails}
          />
        ))}
      </Container>
    </>
  );
}
