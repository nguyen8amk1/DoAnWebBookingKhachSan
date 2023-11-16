import React from 'react'
import { uploadImages } from '../../api/ImageUploadAPI';

class UploadImages extends React.Component {
    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.state = {
            images: []
        };
    }

    uploadImages = async () => {
        const formData = new FormData();
        const fileInput = this.fileInputRef.current;
    
        // Append all selected files to the FormData object
        for (const file of fileInput.files) {
            formData.append('images', file);

            // Log metadata information to the console
            console.log(`File Name: ${file.name}`);
            console.log(`File Type: ${file.type}`);
            console.log(`File Size: ${file.size} bytes`);
            console.log('------------------------');
        }

        const result = await uploadImages(formData);
        console.log(result);
        this.setState({images: result.data});
    }

    render() {
        return <>
        <form id="imageForm">
            <input type="file" ref={this.fileInputRef} multiple />
            <button type="button" onClick={this.uploadImages}>Upload Images</button>
        </form>
        { this.state.images.length > 0 && this.state.images.map((val, index) => (
            <img key={index} src={val} alt="this is an image" />
        ))}
        </>;
    }
}

export default UploadImages;