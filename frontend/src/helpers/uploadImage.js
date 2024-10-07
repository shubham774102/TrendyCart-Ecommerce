import { v2 as cloudinary } from 'cloudinary';

// Ensure sensitive information is stored securely (in a .env file)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Example: 'shubham7702'
  api_key: process.env.CLOUDINARY_API_KEY, // Example: '294128236779628'
  api_secret: process.env.CLOUDINARY_API_SECRET, // Example: 'GZ_mFKEXVHK-F_O2KzsXnlAy1pg'
});

const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'trendy_cart_app_product', // Adjust the folder if needed
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Image upload failed');
  }
};

export default uploadImage;
