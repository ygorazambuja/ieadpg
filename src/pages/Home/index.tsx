import { useEffect, useState } from "react";
import { FiCamera, FiLogOut, FiMenu } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Appbar } from "../../components/Appbar";
import Button from "../../components/Button";
import { Chip } from "../../components/Chip";
import { Drawer } from "../../components/Drawer";
import { IconButton } from "../../components/IconButton";
import { Input } from "../../components/Input";
import { Option, Select } from "../../components/Select";
import { useAuth } from "../../hooks/useAuth";
import {
  asyncFetchCities,
  asyncFetchStates,
} from "../../services/ibge.service";
import { ThemeColors } from "../../styles/global";

export function Home() {
  const { handleLogout } = useAuth();

  const history = useHistory();

  const [selectedState, setSelectedState] = useState<Option>({} as Option);
  const [selectedCity, setSelectedCity] = useState<Option>({} as Option);
  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <Appbar
        title="Home"
        leading={<FiMenu />}
        onLeadingClick={() => {
          setIsDrawerOpen(true);
        }}
        trailing={<FiLogOut />}
        onTrailingClick={handleLogout}
      />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <button onClick={() => history.push("/members")}>members</button>
      </Drawer>
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
      <div style={{ margin: "10px", display: "flex" }}>
        <Select
          value={selectedState}
          setValue={setSelectedState}
          label="Estado"
          options={states}
          placeholder="Selecione um estado"
        />
        <Select
          placeholder="Selecione uma cidade"
          label="Cidades"
          value={selectedCity}
          options={cities}
          setValue={setSelectedCity}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Chip label="0 Membros" color={ThemeColors.red}></Chip>
        <Chip label="1 Membro" color={ThemeColors.green}></Chip>
      </div>
      <div style={{ display: "flex", paddingTop: "24px" }}>
        <IconButton icon={<FiCamera />} color={ThemeColors.blue} />
      </div>
    </>
  );
}
