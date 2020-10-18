import { RAFirebaseOptions } from "providers/RAFirebaseOptions";
import { FirebaseAuth } from "@firebase/auth-types";

export interface IFirebaseWrapper {
  OnUserLogout(arg0: (user: firebase.User) => void): void;
  init(firebaseConfig: {}, options: RAFirebaseOptions): void;
  options: RAFirebaseOptions;
  db(): firebase.firestore.Firestore;
  storage(): firebase.storage.Storage;
  auth(): FirebaseAuth;
  serverTimestamp(): any;
}