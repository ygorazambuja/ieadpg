import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "./configs/firebase";

function App() {

  const [member, setMember] = useState<{
    
  } | null>(null);

  async function fetchMember() {
    const docRef = await getDocs(collection(firestore, "members"));

    const member = docRef.docs[0].data();

    console.log(member);

    setMember(member);
  }

  useEffect(() => {
    fetchMember();
  }, [0]);

  return (
    <div className="App">
      {member && <h1>{member?.name}</h1>}
    </div>
  );
}

export default App;
