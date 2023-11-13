import axios from "axios"

export const uploadImages = async (formData) => {
    try {
        const result = await axios.post("http://127.0.0.1:8080/uploadImages", formData);
        console.log(result);
    } catch(e) {
        console.error('Error uploading images:', e);
    }
}
