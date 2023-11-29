import axios from "axios"


export const uploadImages = async (formData) => {
    try {
        const USER_TOKEN = localStorage.getItem("accessToken");
        const AuthStr = 'Bearer '.concat(USER_TOKEN); 

        const result = await axios.post("http://bookinguit.click:8080/uploadImages", 
            formData, 
            { headers: { Authorization: AuthStr } }
        );
        return result;
    }
    catch(error) {
        return -1;
    }

    // try {
    //     const result = await axios.post("http://bookinguit.click:8080/uploadImages", 
    //         formData, 
    //         // {
    //         //     headers: {
    //         //         "Authorization": "Bearer " + localStorage.getItem("accessToken"),
    //         //         'Content-Type': 'application/json', // Adjust the content type based on your API requirements
    //         //     },
    //         // }
    //     );
    //     return result;
    // } catch(e) {
    //     console.error('Error uploading images:', e);
    //     return null;
    // }
}
