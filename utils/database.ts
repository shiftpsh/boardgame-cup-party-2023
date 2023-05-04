import { getDatabase } from "firebase/database";
import firebase from "./firebase";

export const db = getDatabase(firebase);
