import { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { Option, Select } from "../../components/Select";
import {
  asyncFetchCities,
  asyncFetchStates,
} from "../../services/ibge.service";
import { GlobalStyles } from "../../styles/global";

export function Home() {
  const [selectedState, setSelectedState] = useState<Option>({} as Option);
  const [selectedCity, setSelectedCity] = useState<Option>({} as Option);
  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  useEffect(() => {
    handleFetchState();
  }, [0]);

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

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Button
        content="Primary"
        onClick={() => {
          console.log("oi");
        }}
        primary
      />
      <Button
        content="Secondary"
        onClick={() => {
          console.log("oi");
        }}
        secondary
      />
      <Button
        content="Success"
        onClick={() => {
          console.log("oi");
        }}
        success
      />

      <div style={{ padding: "20px", display: "flex" }}>
        <Input label="Nome" placeholder="Digite aqui ... " />
        <Input label="Telefone" placeholder="67 9 9988-7766" />
      </div>

      <div style={{ margin: "10px" }}>
        <Select
          value={selectedState}
          setValue={setSelectedState}
          label="Estado"
          options={states}
        />
        <Select
          label="Cidades"
          value={selectedCity}
          options={cities}
          setValue={setSelectedCity}
        />
      </div>
    </>
  );
}
