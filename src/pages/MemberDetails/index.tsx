import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { ActiveBar } from "../../components/ActiveBar";
import { Appbar } from "../../components/Appbar";
import Button from "../../components/Button";
import { MemberDetailsView } from "../../components/MemberDetailsView";
import { Member } from "../../entities/member";
import { getMemberById } from "../../services/firebase/members.firebase";
import { ThirdStep } from "../NewMember/steps/ThirdStep";

export function MemberDetails() {
  const [member, setMember] = useState<Member | null>(null);

  const history = useHistory();

  useEffect(() => {
    const id = history.location.pathname.split("/").pop();

    if (!id) return history.replace("/");
    asyncFetchMemberById(id);
  }, []);

  async function asyncFetchMemberById(id: string) {
    const fetchedMember = await getMemberById(id);
    setMember(fetchedMember);
  }

  function handleRedirect() {
    history.goBack();
  }

  return (
    <>
      <Appbar
        title="Detalhes"
        leading={<FiArrowLeft />}
        onLeadingClick={handleRedirect}
      />

      {member && <MemberDetailsView member={member} />}

      <ActiveBar>
        <Button
          content="Editar"
          primary
          onClick={() => {
            history.push(`/edit-member/${member?.id}`);
          }}
        />
        <Button content="Imprimir Ficha" secondary></Button>
      </ActiveBar>
    </>
  );
}
