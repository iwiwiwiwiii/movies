// import { useState } from "react";

// function Registration({ onSuccess }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         passwordConfirmation: ""
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//         if (errors[e.target.name]) {
//             setErrors({ ...errors, [e.target.name]: "" });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = {};

//         if (!formData.name) newErrors.name = "Имя обязательно";
//         if (!formData.email) newErrors.email = "Email обязателен";
//         if (!formData.password) newErrors.password = "Пароль обязателен";
//         if (formData.password !== formData.passwordConfirmation) {
//             newErrors.passwordConfirmation = "Пароли не совпадают";
//         }
//         if (formData.password.length < 5 && formData.password.length > 0) {
//             newErrors.password = "Длина пароля должна быть минимум 5 символов";
//         }

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//         }

//         localStorage.setItem("currentUser", JSON.stringify({
//             name: formData.name,
//             email: formData.email
//         }));
        
//         alert("Регистрация успешна!");
//         onSuccess(); 
//     };

//     return (
//         <div className="registration-container">
//             <div className="registration-card">
//                 <h2>Регистрация</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Имя"
//                             value={formData.name}
//                             onChange={handleChange}
//                         />
//                         {errors.name && <span className="error">{errors.name}</span>}
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                         {errors.email && <span className="error">{errors.email}</span>}
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Пароль"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         {errors.password && <span className="error">{errors.password}</span>}
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="password"
//                             name="passwordConfirmation"
//                             placeholder="Подтверждение пароля"
//                             value={formData.passwordConfirmation}
//                             onChange={handleChange}
//                         />
//                         {errors.passwordConfirmation && <span className="error">{errors.passwordConfirmation}</span>}
//                     </div>
//                     <button type="submit" className="register-btn">Зарегистрироваться</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Registration;