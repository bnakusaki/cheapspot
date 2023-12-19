import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

export async function getImage(documentId) {
    const pathReference = ref(storage, documentId);

    getDownloadURL(pathReference).
    then(
        (url)=>{
            const xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = (event)=>{
                const blob = xhr.response;
            };
            xhr.open("GET", url);
            const response = xhr.send();
            console.log(response);
        });
}