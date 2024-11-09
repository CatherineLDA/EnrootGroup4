// import { useState } from "react"
// import { v4 as uuidv4 } from "uuid"
// import { supabaseClient } from "../supabase/SupabaseClient"


// interface UploadFormProps {
//   onUploadSuccess: () => void;  
// }

// const UploadForm = ({ onUploadSuccess }: UploadFormProps) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if(e.target.files && e.target.files[0]) {
//       setSelectedFile(e.target.files[0]);
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!selectedFile) return
    
//     try {
//       // Generate a unique path with user ID (if applicable) and a UUID
//       const filePath = `public/${uuidv4()}_${selectedFile.name}`;

//       const { data, error } = await supabaseClient
//         .storage
//         .from("images") // Ensure "images" is the name of your Supabase storage bucket
//         .upload(filePath, selectedFile);

//       if (error) {
//         console.error("Error uploading file:", error);
//       } else {
//         console.log("File uploaded successfully:", data);
//         onUploadSuccess();
//       }
//     } catch (error) {
//       console.error("Unexpected error:", error);
//     }
//   }

//   return (
//     <div className="text-center mt-5">
//       <form onSubmit={handleSubmit} className="flex items-center flex-col gap-8">
//         <input 
//           type="file" 
//           onChange={handleFileChange}
//           className="file-input file-input-bordered w-full max-w-xs" />
//         <button 
//           type='submit' 
//           className="btn gap-3 "
//           style={{ backgroundColor: "#4c6ef5", color: "#fff" }}> 
//             Upload
//         </button>
//       </form>
//     </div>
//   )
// } 

// export default UploadForm