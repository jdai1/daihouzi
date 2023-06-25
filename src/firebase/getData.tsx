import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { JournalEntry } from "../dataTypes/journalTypes";

async function getJournalData() {
  const journalData: JournalEntry[] = [];
  const querySnapshot = await getDocs(collection(db, 'journal'));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    journalData.push({
      time: doc.id as string,
      content: doc.data().content as string,
      title: doc.data().title as string,
    })
  });
  console.log(journalData)
  return journalData;
}

export { getJournalData };
