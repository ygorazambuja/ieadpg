import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
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
