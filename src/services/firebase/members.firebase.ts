import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../configs/firebase";
import { Member } from "../../entities/member";

export async function getAllMembers(): Promise<Member[]> {
  const membersRef = collection(db, "members");

  const membersDoc = await getDocs(membersRef);

  const members = membersDoc.docs.map((member) => {
    return member.data();
  });

  return members as Member[];
}

export async function addNewMember(member: Member): Promise<void> {
  const { id } = await addDoc(collection(db, "members"), {
    ...member,
  });

  const memberRef = doc(db, "members", id);

  await updateDoc(memberRef, {
    id,
  });
}

export async function getMemberById(id: string): Promise<Member> {
  const memberRef = doc(db, "members", id);

  const member = await getDoc(memberRef);
  const memberData = member.data();

  return memberData as Member;
}

export async function updateMemeber(member: Member): Promise<void> {
  const memberRef = doc(db, "members", member.id);

  await updateDoc(memberRef, {
    ...member,
  });
}
