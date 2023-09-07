import logo from './logo.svg';
import './App.css';
// import Father from './components/argument-folder/father';
// import Jsonplaceholder from './components/API\'s/json-placeholder';
// import Jsonajax from './components/API\'s/json-ajax';
// import Jsonaxios from './components/API\'s/json-axios';
// import Twoway from './components/data-binding/two-way';
// import Class from './components/data-binding/class';
// import Program from './components/program';
// import Category from './components/API\'s/category';
// import Dummy from './components/API\'s/dummy';
// import Program1 from './components/API\'s/program1';
// import Program2 from './components/API\'s/program2';
// import FakestoreIndex from './components/API\'s/fakestore.api/fakestore-index';
// import Home from './components/API\'s/home';
// import Project from './components/Project/project';
import Program1 from './components/API\'s/program1';
import Father from './components/argument-folder/father';
import FormDemo from './components/form-validations/form-demo';
import FormHome from './components/form-validations/form-home';
import { Formik } from 'formik';
import FormikVal from './components/form-validations/formik-val';
import FormikYup from './components/form-validations/form-yup';
import FormikForm from './components/form-validations/formik-form';
import Project from './components/API\'s/project/project';



const App=()=> {
  return (
    <div className="App">
       <Project/>
    </div>
  );
}

export default App;
