import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";

type UserInput = {
  email: string;
  password: string;
};

export async function doLoginWithEmailAndPassword({
  email,
  password,
}: UserInput) {
  return signInWithEmailAndPassword(auth, email, password);
}
