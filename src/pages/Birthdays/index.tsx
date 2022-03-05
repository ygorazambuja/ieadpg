import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Appbar } from "../../components/Appbar";

export function Birthdays() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <>
      <Appbar
        title="Aniversariantes"
        leading={<FiArrowLeft />}
        onLeadingClick={handleGoBack}
      />
    </>
  );
}
