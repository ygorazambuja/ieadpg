import axios from "axios";
import { Option } from "../components/Select";

export async function asyncFetchStates() {
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );

  const { data } = response;

  return convertStateToSelectOptions(data);
}

export async function asyncFetchCities(state: string) {
  const response =
    await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios
  `);

  const { data } = response;
  return convertCitiesToSelectOptions(data).sort((a, b) =>
    a.label.localeCompare(b.label)
  );
}

type State = {
  id: number;
  nome: string;
  sigla: string;
};

type City = {
  id: number;
  nome: string;
};

function convertCitiesToSelectOptions(cities: City[]) {
  return cities.map((city) => ({
    value: city.id,
    label: city.nome,
  }));
}

function convertStateToSelectOptions(states: State[]): Option[] {
  return states
    .map((state) => ({
      value: state.sigla,
      label: state.nome,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}
