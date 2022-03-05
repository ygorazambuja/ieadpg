import { ActiveBar } from "../../../components/ActiveBar";
import { Avatar } from "../../../components/Avatar";
import Button from "../../../components/Button";
import { CardForm } from "../../../components/CardForm";
import { MemberDetailsView } from "../../../components/MemberDetailsView";
import { Member } from "../../../entities/member";
import { Column, Row } from "../../../styles/global";

type ThirdStepProps = {
  form: Member;
  setForm: (form: Member) => void;
  onNextStep: () => void;
};

export function ThirdStep({ form, setForm, onNextStep }: ThirdStepProps) {
  function handleSubmit() {
    onNextStep();
  }

  return (
    <>
      <MemberDetailsView member={form} />

      <ActiveBar>
        <Button content="Voltar" secondary />
        <Button content="Continuar" primary onClick={handleSubmit} />
      </ActiveBar>
    </>
  );
}
