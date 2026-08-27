import './App.css'
import react from 'react'
import RegisterForm from './components/RegisterForm.jsx'

function App(){
    return(
        <div style={{padding: '20px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: 'f9f9f9', minHeight: '100vh'}}>
            <h2>Lab 12: Quản lý form chuyên nghiệp</h2>
            <RegisterForm />
        </div>
    );
}

export default App
