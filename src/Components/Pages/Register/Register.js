import React,{useState} from "react";
import "../Register/Register.css";
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';
const Register = () => {
    const [inputUsername, setInputUsername] = useState("");  
    const [inputPassword, setInputPassword] = useState("");  
    const [firstName, setFirstName] = useState("");  
    const [lastName, setLastName] = useState("");  
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(""); // State for error handling  
    const [success, setSuccess] = useState(""); // State for success message  
  
    const handleSubmit = async (event) => {  
      event.preventDefault();  
      setLoading(true);  
      setError(""); // Reset error state  
      setSuccess(""); // Reset success state  
  
      try {  
        // Make the POST request to your backend API  localhost:9090/authenticate
        const response = await axios.post("", {  
          username: inputUsername,  
          password: inputPassword,  
          firstName: firstName,  
          lastName: lastName,  
        });  
  
        // Handle success response  
        setSuccess("Registration successful!"); // Set success message  
        console.log(response.data); // Log response data for debugging  
  
      } catch (error) {  
        // Handle error response  
        setError("Registration failed. Please try again."); // Set error message  
        console.error(error); // Log error for debugging  
      } finally {  
        setLoading(false); // Stop loading  
      }  
    }; 
  return (
    <>
   <div className="container">  
        <div className="row">  
          <div className="d-flex justify-content-center align-items-center mt-4 mb-4">  
            <div className="register__wrapper">  
              <div className="register__backdrop"></div>  
              <Form className="shadow p-2 bg-white rounded" onSubmit={handleSubmit}>  
                <div className="h4 mb-2 text-center">Sign Up</div>  
                
             {/* <Form.Group className="mb-2 pt-2" controlId="FirstName">  
                  <Form.Label>First Name</Form.Label>  
                  <Form.Control  
                    type="text"  
                    value={firstName}  
                    placeholder="Firstname"  
                    onChange={(e) => setFirstName(e.target.value)}  
                    required  
                  />  
                </Form.Group>  
                
                <Form.Group className="mb-2 pt-2" controlId="LastName">  
                  <Form.Label>Last Name</Form.Label>  
                  <Form.Control  
                    type="text"  
                    value={lastName}  
                    placeholder="Lastname"  
                    onChange={(e) => setLastName(e.target.value)}  
                    required  
                  />  
                </Form.Group>   */}

                {error && (  
                  <Alert className="mb-2" variant="danger">  
                    {error}  
                  </Alert>  
                )}  
                
                {success && (  
                  <Alert className="mb-2" variant="success">  
                    {success}  
                  </Alert>  
                )}  

                <Form.Group className="mb-2 pt-2" controlId="username">  
                  <Form.Label>Username</Form.Label>  
                  <Form.Control  
                    type="text"  
                    value={inputUsername}  
                    placeholder="Username"  
                    onChange={(e) => setInputUsername(e.target.value)}  
                    required  
                  />  
                </Form.Group>  
                
                <Form.Group className="mb-2 pt-2" controlId="password">  
                  <Form.Label>Password</Form.Label>  
                  <Form.Control  
                    type="password"  
                    value={inputPassword}  
                    placeholder="Password"  
                    onChange={(e) => setInputPassword(e.target.value)}  
                    required  
                  />  
                </Form.Group>  
                
                <Form.Group className="mb-2 pt-2 d-grid justify-content-start" controlId="checkbox">  
                  <Form.Check className="pt-2" type="checkbox" label="Remember me" />  
                </Form.Group>  
                
                <Button className="w-100" variant="primary" type="submit" disabled={loading}>  
                  {loading ? "Registering..." : "Register"}  
                </Button>  

                <p className="forgot-password text-right">  
                  Already registered? <a href="/login">Sign in?</a>  
                </p>  
              </Form>  
            </div>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};  

export default Register;
