import '../Login/Login.css';  
import React, { useState } from "react";  
import { Form, Button, Alert } from "react-bootstrap";  
import axios from 'axios';  

const Login = () => {  
  const [inputUsername, setInputUsername] = useState("");  
  const [inputPassword, setInputPassword] = useState("");  

  const [show, setShow] = useState(false);  
  const [loading, setLoading] = useState(false);  

  const handleSubmit = async (event) => {  
    event.preventDefault();  
    //setLoading(true);  
   // console.log(inputUsername,inputPassword);
    // const response = await axios.post('http://localhost:9091/authenticate', {  
    //   password:inputUsername,
    //   username:inputPassword
    // });
    // console.log(response.data);
    try {  
      // Replace this URL with your actual API endpoint  
      const response = await axios.post('http://localhost:9091/authenticate', {  
        username: inputUsername,  
        password: inputPassword  
      });  

      // Handle successful response here  
      console.log(response.data);
      // Assuming the API returns a success status  
      if (response.data.success) {  
        // Handle successful login (e.g., redirect, show success message)  
        console.log('Login successful');  
      } else {  
        setShow(true); // Show error alert for incorrect credentials  
      }  
    } catch (error) {  
      console.error('Error during login', error);  
      setShow(true); // Show error alert if the request fails  
    }  

    setLoading(false);  
  };   

  return (  
    <div className="container">  
      <div className="row">  
        <div className="sign-in__wrapper">  
          <div className="sign-in__backdrop"></div>  
          <Form  
            className="shadow p-4 bg-white rounded"  
            onSubmit={handleSubmit}  
          >  
            <div className="h4 mb-2 text-center">Sign In</div>  
            {show && (  
              <Alert  
                className="mb-2"  
                variant="danger"  
                onClose={() => setShow(false)}  
                dismissible  
              >  
                Incorrect username or password.  
              </Alert>  
            )}  
            <Form.Group className="mb-2 pt-4" controlId="username">  
              <Form.Label>Username</Form.Label>  
              <Form.Control  
                type="text"  
                value={inputUsername}  
                placeholder="Username"  
                onChange={(e) => setInputUsername(e.target.value)}  
                required  
              />  
            </Form.Group>  
            <Form.Group className="mb-2 pt-4" controlId="password">  
              <Form.Label>Password</Form.Label>  
              <Form.Control  
                type="password"  
                value={inputPassword}  
                placeholder="Password"  
                onChange={(e) => setInputPassword(e.target.value)}  
                required  
              />  
            </Form.Group>  
            <Form.Group className="mb-2 pt-4 d-grid justify-content-start" controlId="checkbox">  
              <Form.Check className="pt-4" type="checkbox" label="Remember me" />  
            </Form.Group>  
            <Button className="w-100" variant="primary" type="submit" disabled={loading}>  
              {loading ? "Logging In..." : "Log In"}  
            </Button>  
          </Form>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Login;  

// import '../Login/Login.css';
// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import axios from 'axios';
// const Login = () => {
//   const [inputUsername, setInputUsername] = useState("");
//   const [inputPassword, setInputPassword] = useState("");

//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);  
    
//     try {  
//       // Replace this URL with your actual API endpoint  
//       const response = await axios.post('https://your-api-endpoint.com/login', {  
//         params: {  
//           username: inputUsername,  
//           password: inputPassword  
//         }  
//       });  

//       console.log(response.data); // Handle successful response here  

//       // Assuming the API returns a success status  
//       if (response.data.success) {  
//         // Handle successful login (e.g., redirect, show success message)  
//         console.log('Login successful');  
//       } else {  
//         setShow(true); // Show error alert for incorrect credentials  
//       }  
//     } catch (error) {  
//       console.error('Error during login', error);  
//       setShow(true); // Show error alert if the request fails  
//     }  

//     setLoading(false);  
//   }; 

//   // const handlePassword = () => {};

//   // function delay(ms) {
//   //   return new Promise((resolve) => setTimeout(resolve, ms));
//   // }

//   return (
//     <div className="container">
//       <div className="row">
//         {/* <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
//           {/* <div className="col-lg-6 col-md-6 col-sm-6"></div> */}
//           {/* <div className="col-lg-6 col-md-6 col-sm-6"> */} 
//             <div className="sign-in__wrapper">
//               {/* Overlay style={{ backgroundImage: `url(${BackgroundImage})` }}*/}
//               <div className="sign-in__backdrop"></div>
//               {/* Form */}
//               <Form
//                 className="shadow p-4 bg-white rounded"
//                 onSubmit={handleSubmit}
//               >
//                 {/* Header  */}
//                 <div className="h4 mb-2 text-center">Sign In</div>
//                 {/* ALert */}
//                 {show ? (
//                   <Alert
//                     className="mb-2"
//                     variant="danger"
//                     onClose={() => setShow(false)}
//                     dismissible
//                   >
//                     Incorrect username or password.
//                   </Alert>
//                 ) : (
//                   <div />
//                 )}
//                 <Form.Group className="mb-2 pt-4" controlId="username">
//                   <Form.Label>Username</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={inputUsername}
//                     placeholder="Username"
//                     onChange={(e) => setInputUsername(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-2 pt-4" controlId="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={inputPassword}
//                     placeholder="Password"
//                     onChange={(e) => setInputPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-2 pt-4 d-grid justify-content-start" controlId="checkbox">
//                   <Form.Check  className="pt-4" type="checkbox" label="Remember me" />
//                 </Form.Group>
//                 {!loading ? (
//                   <Button className="w-100" variant="primary" type="submit">
//                     Log In
//                   </Button>
//                 ) : (
//                   <Button
//                     className="w-100"
//                     variant="primary"
//                     type="submit"
//                     disabled
//                   >
//                     Logging In...
//                   </Button>
//                 )}
//               </Form>
//             </div>
//           </div>
//         </div>
//    // </div>
//     // </div> 
//   );
// };

// export default Login;
