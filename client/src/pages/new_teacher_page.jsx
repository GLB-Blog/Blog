// import React, { useEffect, useState} from "react";
// import axios from "axios";

// const Teachers = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchAllTeachers = async () => {
//       try {
//         const res = await axios.get("/api/instructor");
//         setTeachers(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllTeachers();
//   }, []);

//   console.log(teachers);

//   return (
//     <div>
//       <h1>Teachers</h1>
//       <div className="teachers">
//         {teachers.map((teacher) => (
//           <div key={teacher.id} className="teachers">
//             <img src={teacher.img} alt="" />
//             <h2>{teacher.name}</h2>
//             <p>{teacher.email}</p>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teachers;
