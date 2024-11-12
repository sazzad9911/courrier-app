import { domain } from "./API";

const uploadPicture = async (url: string, token: string, uri: string) => {
    // Convert URI to Blob
    const response = await fetch(uri);
    const blob = await response.blob();

    // Convert Blob to Base64 using FileReader
    const base64String = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob); // Read as data URL to get base64 encoding
    });

    // Create the Data URI
    const dataUri = `data:${blob.type};base64,${base64String}`;
    //console.log(dataUri);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    const formData = new FormData();
    formData.append("dataUri", dataUri);

    const options = {
        method: "POST",
        headers: myHeaders,
        body: formData,
    };

    const result = await fetch(`${domain}${url}`, options);
    return result;
};

export default uploadPicture;
