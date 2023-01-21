import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBRMWXtp61IWUD1od9wZ8KEo7XO9EYNK1A",
  authDomain: "mobileapp-ad1ea.firebaseapp.com",
  projectId: "mobileapp-ad1ea",
  storageBucket: "mobileapp-ad1ea.appspot.com",
  messagingSenderId: "915902572442",
  appId: "1:915902572442:web:072c91b44ea49c0318fc23",
  measurementId: "G-FEXS8Y1DHJ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

// user adında bir collection'um var bunun içerisindeki tüm verileri çekmek için
// uid kullanma tüm verileri çek
export const getUserDocuments = async () => {
  const usersRef = collection(db, "users");
  const usersSnapshot = await getDocs(usersRef);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());

  return usersList;
};

export const getProductDocuments = async () => {
  const productRef = collection(db, "product");
  const productSnapshot = await getDocs(productRef);
  const productList = productSnapshot.docs.map((doc) => doc.data());

  return productList;
};

export const getProductIlacDocuments = async () => {
  const productIlacRef = collection(db, "productIlac");
  const productIlacSnapshot = await getDocs(productIlacRef);
  const productIlacList = productIlacSnapshot.docs.map((doc) => doc.data());

  return productIlacList;
};

export const getProductAracDocuments = async () => {
  const productAracRef = collection(db, "ProductArac");
  const productAracSnapshot = await getDocs(productAracRef);
  const productAracList = productAracSnapshot.docs.map((doc) => doc.data());

  return productAracList;
};
export const getProductUrunDocuments = async () => {
  const productUrunRef = collection(db, "ProductUrun");
  const productUrunSnapshot = await getDocs(productUrunRef);
  const productUrunList = productUrunSnapshot.docs.map((doc) => doc.data());

  return productUrunList;
};