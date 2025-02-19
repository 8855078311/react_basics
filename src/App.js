
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import PatientForm from './Components/Pages/PatientForm/PatientForm';
import Home from './Components/Pages/Home/Home';
import Practice from './Components/Practice/Practice';
import T1 from './Components/Practice/T1';
import T2 from './Components/Practice/T2';
import LoginContextProvider from './context/LoginContextProvider';
import MainContext from './context/MainContext';
import Application from './UseRef/Application';
import ExampleUseReducer from './UseReducer/ExampleUseReducer';
import Test from './UseLayoutEffect/Test';
import TestNew from './UseMemo/TestNew';
import TestNewNew from './UseCallback/TestNewNew';
import useFetch from './Customhook/useFetch';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/pract" element={<Practice />} /> */}
          {/* <Route index element={<Practice />} /> */}
          <Route path="login" element={<Practice/>} />
           <Route path="register" element={<Register/>} />
           <Route path="patient_history" element={<PatientForm/>} /> 
           <Route path="t1" element={<T1/>} /> 
           <Route path="t2" element={<T2/>} /> 
           <Route path="/context" element={<LoginContextProvider/>} />
           <Route path="/maincontext" element={<MainContext/>}/>
           <Route path="/application" element={<Application/>}/>
           <Route path="/example" element={<ExampleUseReducer/>}/>
           <Route path="/test" element={<Test/>}/>
           <Route path="/testnew" element={<TestNew/>}/>
           <Route path="/testnewnew" element={<TestNewNew/>}/>
           <Route path="/fetch" element={<useFetch/>}/>

          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
