import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container } from "react-bootstrap"
import HelloWorld from "./components/HelloWorld"
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Container className="mainPage">
     <HelloWorld/>
    </Container>
     <Footer/>
    </>
  )
}

export default App
