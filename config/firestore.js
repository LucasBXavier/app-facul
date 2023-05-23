import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"

export async function salvar(data){
  try {
    await addDoc(collection(db, 'usuarios'), data)
    return 'ok'
  } catch(error){
    console.log('Erro ao cadastrar')
    return 'erro'
  }
}
