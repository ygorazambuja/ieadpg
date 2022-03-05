import axios from "axios";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Appbar } from "../../components/Appbar";
import Button from "../../components/Button";
import { Spinner } from "../../components/Spinner";
import { createMember, Member } from "../../entities/member";
import { addNewMember } from "../../services/firebase/members.firebase";
import { Container } from "./styles";

export function ImportMember() {
  const history = useHistory();

  const [member, setMember] = useState<Member>(createMember());
  const [isLoading, setIsLoading] = useState(false);

  async function sendFile() {}

  function openFileInput() {
    document.getElementById("fileInput")?.click();
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", e.target.files[0]);

      const response = await axios({
        method: "POST",
        url: "https://ieadpg-api.herokuapp.com/import",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { data } = response;

      await addNewMember(data.person);

      toast.success("Membro importado com sucesso!");
    } catch (error) {
      toast.error("Erro ao importar membro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Appbar
        title="Importar Membro"
        leading={<FiArrowLeft />}
        onLeadingClick={() => {
          history.goBack();
        }}
      />

      <Container>
        <h1>Importar Membro via Word</h1>

        {!isLoading && (
          <>
            <Button content="Enviar Arquivo" onClick={openFileInput} primary />
            <input
              type="file"
              id="fileInput"
              accept=".doc*"
              style={{ display: "none" }}
              onChange={handleSubmit}
            />
          </>
        )}
        {isLoading && <Spinner />}
      </Container>
    </>
  );
}
