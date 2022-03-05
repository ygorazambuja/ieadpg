import { Member } from "../../entities/member";
import { Row, Column } from "../../styles/global";
import { Avatar } from "../Avatar";
import { CardForm } from "../CardForm";

type MemberDetailsViewProps = {
  member: Member;
};
export function MemberDetailsView({ member }: MemberDetailsViewProps) {
  return (
    <>
      <CardForm title="">
        <div>
          <Row>
            <Avatar src="http://via.placeholder.com/300" />
            <Column style={{ justifyContent: "space-evenly" }}>
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </Column>
          </Row>
          <Row>
            <Column style={{ flex: 1 }}>
              <Row>
                <strong>Telefone:</strong>
                <span>{member.phoneNumber}</span>
              </Row>
            </Column>
            <Column style={{ flex: 1 }}>
              <Row>
                <strong>Nascimento: </strong>
                <span>{member.birthDate}</span>
              </Row>
            </Column>
          </Row>
          <Row>
            <strong>Email</strong>
            <span>{member.email}</span>
          </Row>
        </div>
      </CardForm>
      <CardForm title="filiação">
        <div>
          <strong>Pai: </strong>
          <span>{member.fatherName}</span>
        </div>
        <div>
          <strong>Mãe: </strong>
          <span>{member.motherName}</span>
        </div>
        {member.spouseName && (
          <Row>
            <strong>Conjugue:</strong>
            <span>{member.spouseName}</span>
          </Row>
        )}
      </CardForm>
      <CardForm title="documentação">
        <Row>
          <Column style={{ flex: 1 }}>
            <Row>
              <strong>RG:</strong>
              <span>{member.rg}</span>
            </Row>
          </Column>
          <Column style={{ flex: 1 }}>
            <Row>
              <strong>Data de Emissão: </strong>
              <span>{member.rgEmissionDate}</span>
            </Row>
          </Column>
        </Row>
        <Row>
          <div>
            <strong>CPF:</strong>
            <span>{member.cpf}</span>
          </div>
        </Row>
        <Row>
          <Column style={{ flex: 1 }}>
            <Row>
              <strong>Titulo de Eleitor:</strong>
              <span>{member.voterTitle}</span>
            </Row>
          </Column>
          <Column style={{ flex: 1 }}>
            <div>
              <strong>Sessão:</strong>
              <span>{member.voterSession}</span>
            </div>
          </Column>
        </Row>
      </CardForm>
      <CardForm title="naturalidade">
        <div>
          <strong>Estado:</strong>
          <span>{member.birthState}</span>
        </div>
        <div>
          <strong>Cidade:</strong>
          <span>{member.birthCity}</span>
        </div>
      </CardForm>
      <CardForm title="dados ministeriais">
        <div>
          <strong>Congregação: </strong>
          <span>{member.congregationPlace}</span>
        </div>
        <div>
          <strong>Data de Batismo: </strong>
          <span>{member.baptismDate}</span>
        </div>
      </CardForm>
      <CardForm title="gerais">
        <Row>
          <Column style={{ flex: 1 }}>
            <strong>Estado Cívil:</strong>
            <span>{member.civilState}</span>
          </Column>
          <Column style={{ flex: 1 }}>
            <Row>
              <strong>Fator RH:</strong>
              <span>{member.bloodType}</span>
            </Row>
          </Column>
        </Row>
        <Row>
          <strong>Escolaridade:</strong>
          <span>{member.education}</span>
        </Row>
        <Row>
          <strong>Endereço:</strong>
          <span>{member.address}</span>
        </Row>
      </CardForm>
    </>
  );
}
