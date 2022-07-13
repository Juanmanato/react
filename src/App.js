import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import PublicRouter from './route/PublicRoute'
import Header from './component/Header'
import Footer from './component/Footer'
import {Container} from 'react-bootstrap'
import LoginProvider from './Context/LoginProvider'

function App() {
  return (
    <div className="App">
      
      
      <Container>
      <Router>
        <LoginProvider>
          <Header />
          <PublicRouter/>
        </LoginProvider>
      </Router>
      <Footer/>
     </Container>
    

     
    </div>
  );
}

export default App;
