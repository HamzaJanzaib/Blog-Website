// // import Swal from "sweetalert2";
// // import Imageinput from "../Button/Imageinput";
// // import { useState } from "react";
// // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// // import { storage } from "./initializeApp";

// // const editProfile = () => {
// //   const [image, setImage] = useState(null)
// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       setImage(file)
// //     }
// //   }
// //     Swal.fire({
// //         title: "Edit Profile",
// //               input: ha,
// //     inputAttributes: {
// //       autocapitalize: "on"
// //     },
// //     showCancelButton: true,
// //     confirmButtonText: "Submit",
// //     showLoaderOnConfirm: true,
// //     allowOutsideClick: () => !Swal.isLoading()
// //   }).then((result) => {
// //     if (result.isConfirmed) {
// //       Swal.fire({
// //         title: `${result.value.login}'s avatar`,
// //         imageUrl: result.value.avatar_url
// //       });
// //     }
// //     });
// // }

// // export { editProfile }

// import Swal from "sweetalert2";
// import { useState } from "react";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "./initializeApp";

// const EditProfile = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!image) {
//       Swal.fire("Error", "Please select an image first.", "error");
//       return;
//     }

//     try {
//       // Upload the image to Firebase Storage
//       const storageRef = ref(storage, `profile-images/${image.name}`);
//       await uploadBytes(storageRef, image);

//       // Get the download URL
//       const downloadURL = await getDownloadURL(storageRef);

//       // Show success message with the image
//       Swal.fire({
//         title: "Profile Updated!",
//         text: "Your profile image has been updated successfully.",
//         imageUrl: downloadURL,
//         imageAlt: "Profile Image",
//       });
//     } catch (error) {
//       console.error("Error uploading image: ", error);
//       Swal.fire("Error", "Failed to upload image. Please try again.", "error");
//     }
//   };

//   Swal.fire({
//     title: "Edit Profile",
//     html: `
//       <input type="file" accept="image/*" id="imageInput" />
//     `,
//     focusConfirm: false,
//     showCancelButton: true,
//     confirmButtonText: "Submit",
//     preConfirm: () => {
//       const fileInput = document.getElementById("imageInput");
//       if (fileInput.files.length > 0) {
//         return fileInput.files[0];
//       } else {
//         Swal.showValidationMessage("Please select an image.");
//         return false;
//       }
//     },
//   }).then((result) => {
//     if (result.isConfirmed) {
//       setImage(result.value);
//       handleSubmit();
//     }
//   });
// };

// export default EditProfile;