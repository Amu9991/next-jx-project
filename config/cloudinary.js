import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "donk8wk7b",
//   api_key: "286157389794229",
//   api_secret: "9MjxFn7svuzFCOqGAtRjM2lmmno",
// });
