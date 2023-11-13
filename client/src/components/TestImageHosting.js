import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {sepia} from "@cloudinary/url-gen/actions/effect";

const TestImageHosting = () => {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('front_face');

  // Apply the transformation.
  myImage
  .effect(sepia());  // Apply a sepia effect.

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};

export default TestImageHosting;