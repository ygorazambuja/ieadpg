export type Member = {
  id: string;
  memberNumber: number;
  phoneNumber: string;
  birthDate: string;
  email: string;
  name: string;

  fatherName: string;
  motherName: string;

  rg: string;
  rgEmissionDate: string;
  cpf: string;

  voterTitle: string;
  voterSession: string;
  voterZone: string;

  birthState: string;
  birthCity: string;

  congregationPlace: string;
  baptismDate: string;
  role: string;

  civilState: string;
  bloodType: string;
  spouseName: string;

  education: string;

  address: string;
};

export function createMember() {
  return {
    id: "",
    memberNumber: 0,
    phoneNumber: "",
    birthDate: "",
    email: "",
    name: "",

    fatherName: "",
    motherName: "",

    rg: "",
    rgEmissionDate: "",
    cpf: "",

    voterTitle: "",
    voterSession: "",
    voterZone: "",

    birthState: "",
    birthCity: "",

    congregationPlace: "",
    baptismDate: "",
    role: "",

    civilState: "",
    bloodType: "",
    spouseName: "",

    education: "",

    address: "",
  } as Member;
}
