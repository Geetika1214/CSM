import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Account from './pages/Account';
import EmailVerification from './pages/EmailVerification';
import ForgotPassword from './pages/forgotPassword';
import GenerateNewPassword from './pages/generateNewPass';
import FileUploadPage from './pages/FileUploadPage';
import { Project } from './pages/project';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/signin' element= {<SignIn/>}></Route>
      <Route path='/forgotpassword' element= {<ForgotPassword/>}></Route>
      <Route path='/generatenewpass' element = {<GenerateNewPassword/>}></Route>
      <Route path='/profile' element= {<Profile/>}></Route>
      <Route path='/signup' element= {<SignUp/>}></Route>
      <Route path='/emailverification' element= {<EmailVerification/>}></Route>
      <Route path='/account' element= {<Account/>}></Route>
      <Route path='/fileupload' element= {<FileUploadPage/>}></Route>
      <Route path='/project' element= {<Project/>}></Route>


    </Routes>
    </BrowserRouter>
  )
}
