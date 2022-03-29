import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  serverTimestamp,
  getFirestore,
  collection,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const firestore = getFirestore();

export const getPostsRequest = async () => {
  return await new Promise((resolve, reject) => {
    getDocs(collection(firestore, "posts"))
      .then((querySnapshot) => {
        resolve(querySnapshot.docs);
      })
      .catch(() => {
        reject("posts not found");
      });
  });
};

export const addPostRequest = async (payload = {}) => {
  try {
    const id = doc(collection(firestore, "posts")).id;
    const author = getAuth().currentUser.providerData;
    const { postTitle, postContent, image } = payload;
    const imageURL = image ? await uploadPostImage(image) : "";

    await setDoc(doc(firestore, "posts", id), {
      id: id,
      postTitle: postTitle,
      postContent: postContent,
      image: imageURL,
      author: { author },
      createdAt: serverTimestamp(firestore),
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCommentToPostRequest = async (payload = {}) => {
  try {
    const { id, comment } = payload;
    const author = getAuth().currentUser.providerData;

    await setDoc(doc(firestore, "posts", id), {
      comments: [{ comment: comment, author: author }],
    });
  } catch (e) {
    console.log("An error occurred");
  }
};

const uploadPostImage = async (uri) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = (e) => {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileName = new Date().getTime() + "_post.jpg";
  const metadata = {
    contentType: "image/jpeg",
  };
  const fileRef = ref(getStorage(), "posts/" + fileName);
  await uploadBytes(fileRef, blob, metadata);

  blob.close();
  return await getDownloadURL(fileRef);
};
