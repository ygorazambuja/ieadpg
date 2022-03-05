import { useState } from "react";
import { ActiveBar } from "../../../components/ActiveBar";
import Button from "../../../components/Button";
import { CardForm } from "../../../components/CardForm";
import { Input } from "../../../components/Input";
import { Option, Select } from "../../../components/Select";
import { Member } from "../../../entities/member";
import {
  BLOOD_TYPE_OPTIONS,
  EDUCATION_OPTIONS,
} from "../../../shared/contants";
import { Column, Row } from "../../../styles/global";

type FirstStepForm = {
  form: Member;
  setForm: (form: Member) => void;
  onNextStep: () => void;
};

export function FirstStep({ form, setForm, onNextStep }: FirstStepForm) {
  const [education, setEducation] = useState<Option>({} as Option);
  const [bloodType, setBloodType] = useState<Option>({} as Option);

  function handleNextStep() {
    setForm({
      ...form,
      education: education.value || "",
      bloodType: bloodType.value || "",
    });
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
      <CardForm title="Dados Pessoais">
        <Input
          label="Nome Completo"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <Row>
          <Input
            label="Data de Nascimento"
            value={form.birthDate}
            name="birthDate"
            onChange={handleChange}
            type="date"
          />
          <Input
            label="Telefone"
            value={form.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            type="tel"
            maxLength={11}
            inputMode="numeric"
          />
        </Row>
        <Input
          label="E-mail"
          value={form.email}
          name="email"
          onChange={handleChange}
          type="email"
        />
        <Row style={{ justifyContent: "space-around" }}>
          <Column style={{ flex: "1", padding: "0px 4px" }}>
            <Select
              label="Escolaridade"
              value={education}
              options={EDUCATION_OPTIONS}
              setValue={(option) => setEducation(option)}
            />
          </Column>
          <Column>
            <Select
              label="Fator RH"
              options={BLOOD_TYPE_OPTIONS}
              setValue={(value) => setBloodType(value)}
              value={bloodType}
            />
          </Column>
        </Row>
      </CardForm>
      <CardForm title="Dados Ministeriais">
        <Input
          label="Cargo"
          value={form.role}
          name="role"
          onChange={handleChange}
        />
        <Input
          label="Data de Batismo"
          value={form.baptismDate}
          name="baptismDate"
          onChange={handleChange}
          type="date"
        />
        <Input
          label="Congregação"
          value={form.congregationPlace}
          name="congregationPlace"
          onChange={handleChange}
        />
      </CardForm>
      <ActiveBar>
        <Button content="Voltar" secondary />
        <Button content="Continuar" primary onClick={handleNextStep} />
      </ActiveBar>
    </>
  );
}
