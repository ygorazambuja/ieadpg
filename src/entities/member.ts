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

export function createMember(): Member {
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

export function createMemberFromJson(json: any): Member {
  return {
    id: json.id,
    memberNumber: json.memberNumber,
    phoneNumber: json.phoneNumber,
    birthDate: json.birthDate,
    email: json.email,
    name: json.name,

    fatherName: json.fatherName,
    motherName: json.motherName,

    rg: json.rg,
    rgEmissionDate: json.rgEmissionDate,
    cpf: json.cpf,

    voterTitle: json.voterTitle,
    voterSession: json.voterSession,
    voterZone: json.voterZone,

    birthState: json.birthState,
    birthCity: json.birthCity,

    congregationPlace: json.congregationPlace,
    baptismDate: json.baptismDate,

    role: json.role,

    civilState: json.civilState,
    bloodType: json.bloodType,
    spouseName: json.spouseName,

    education: json.education,

    address: json.address,
  } as Member;
}
