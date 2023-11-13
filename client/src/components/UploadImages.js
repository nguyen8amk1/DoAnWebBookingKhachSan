import React from 'react'
import { uploadImages } from '../api/ImageUploadAPI';

class UploadImages extends React.Component {
    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.state = {
        };
    }

    uploadImages = () => {
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

        uploadImages(formData);
    }

    render() {
        return <>
        <form id="imageForm">
            <input type="file" ref={this.fileInputRef} multiple />
            <button type="button" onClick={this.uploadImages}>Upload Images</button>
        </form>
        </>;
    }
}

export default UploadImages;