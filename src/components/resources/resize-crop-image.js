import { useState } from 'react';
import Cropper from 'react-easy-crop';

export default function ResizeCropImage({ setFileUpload, imagePath }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });

  const getCroppedImg = async (imageSrc, crop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    /* setting canvas width & height allows us to
    resize from the original image resolution */
    canvas.width = 250;
    canvas.height = 250;

    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      canvas.width,
      canvas.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg');
    });
  };

  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(imagePath, croppedAreaPixels);
    // console.log(croppedImage);
    // console.log(_croppedArea, croppedAreaPixels);
    setFileUpload(croppedImage);
  };

  return (
    <section className="w-full min-h-40 max-h-60 relative bg-transparent overflow-hidden rounded-md mt-3">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Cropper
            image={imagePath}
            crop={crop}
            zoom={1}
            aspect={1}
            zoomWithScroll={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
          />
        </div>
      </div>
    </section>
  );
}
