import React,{useState} from 'react';
import '../PatientForm/PatientForm.css';
import { Form, Button } from "react-bootstrap";
const PatientForm=()=>{
      const [loading, setLoading] = useState(false);
      const [firstName,setFirstName]=useState("");
      const[lastName,setLastName]=useState(""); 

      const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        console.log(`Username :firstName:${firstName},lastName:${lastName}`);
        setLoading(false);
      };
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    return(
        <>
          <div className="container">
          <div className="row">
          <Form
                className="shadow p-2 bg-white rounded"
                onSubmit={handleSubmit}
              >
                </Form>
                <Form.Group className="mb-2 pt-2" controlId="FirstName">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    placeholder="Firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2 pt-2" controlId="LastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    placeholder="Lastname"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                    </Form.Group>
                    {!loading ? (
                  <Button className="w-100" variant="primary" type="submit">
                    submit
                  </Button>
                ) : (
                  <Button
                    className="w-100"
                    variant="primary"
                    type="submit"
                    disabled
                  >
                    submit
                  </Button>
                )}
          </div>
          </div>
        </>
    )
}
export default PatientForm;