import { useEffect, useState } from "react";
import { ActiveBar } from "../../../components/ActiveBar";
import Button from "../../../components/Button";
import { CardForm } from "../../../components/CardForm";
import { Input } from "../../../components/Input";
import { Option, Select } from "../../../components/Select";
import { Member } from "../../../entities/member";
import {
  asyncFetchCities,
  asyncFetchStates,
} from "../../../services/ibge.service";
import { CIVIL_STATE_OPTIONS } from "../../../shared/contants";

type SecondStepProps = {
  form: Member;
  setForm: (form: Member) => void;
  onNextStep: () => void;
};

export function SecondStep({ form, setForm, onNextStep }: SecondStepProps) {
  const [civilState, setCivilState] = useState<Option>({} as Option);
  const [selectedState, setSelectedState] = useState<Option>({} as Option);
  const [selectedCity, setSelectedCity] = useState<Option>({} as Option);

  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  useEffect(() => {
    handleFetchState();
  }, []);

  useEffect(() => {
    setCities([]);
    setSelectedCity({} as Option);
  }, [selectedState]);

  function handleFetchState() {
    asyncFetchStates().then((states) => setStates(states));
  }

  useEffect(() => {
    asyncFetchCities(selectedState.value).then((cities) => setCities(cities));
  }, [selectedState]);

  function handleNextStep() {
    setForm({
      ...form,
      civilState: civilState.value || "",
      birthState: selectedState.value || "",
      birthCity: selectedCity.value || "",
    });

    console.log("secondsStep");
    onNextStep();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <>
      <CardForm title="Filiação">
        <Input
          label="Nome da Mãe"
          value={form.motherName}
          name="motherName"
          onChange={handleChange}
        />
        <Input
          label="Nome do Pai"
          value={form.fatherName}
          name="fatherName"
          onChange={handleChange}
        />
      </CardForm>
      <CardForm title="Casamento">
        <Select
          label="Estado Cívil"
          options={CIVIL_STATE_OPTIONS}
          setValue={setCivilState}
          value={civilState}
        />
        <Input
          label="Nome do Conjugue"
          value={form.spouseName}
          name="spouseName"
          onChange={handleChange}
        />
      </CardForm>
      <CardForm title="Documentação">
        <div className="grid">
          <Input
            label="RG"
            value={form.rg}
            name="rg"
            onChange={handleChange}
            type="number"
          />
          <Input
            label="Data de Emissão"
            value={form.rgEmissionDate}
            name="rgEmissionDate"
            onChange={handleChange}
            type="date"
          />
          <Input
            label="CPF"
            value={form.cpf}
            name="cpf"
            onChange={handleChange}
            type="number"
          />
          <Input
            label="Titulo de Eleitor"
            value={form.voterTitle}
            name="voterTitle"
            onChange={handleChange}
            type="number"
          />
          <Input
            label="Zona Eleitoral"
            value={form.voterZone}
            name="voterZone"
            onChange={handleChange}
            type="number"
          />
          <Input
            label="Seção"
            value={form.voterSession}
            name="voterSession"
            onChange={handleChange}
            type="number"
          />
        </div>
      </CardForm>
      <CardForm title="Naturalidade">
        <div className="grid">
          <Select
            label="Estado"
            options={states}
            setValue={setSelectedState}
            value={selectedState}
            placeholder="Selecione o estado"
          />
          <Select
            label="Cidade"
            options={cities}
            setValue={setSelectedCity}
            value={selectedCity}
            placeholder="Selecione uma cidade"
          />
        </div>
      </CardForm>
      <ActiveBar>
        <Button content="Voltar" secondary onClick={() => {}}>
          Salvar
        </Button>
        <Button content="Continuar" primary onClick={handleNextStep}>
          Cancelar
        </Button>
      </ActiveBar>
    </>
  );
}
