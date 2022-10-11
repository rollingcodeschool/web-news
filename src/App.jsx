import Formulario from "./components/Formulario";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
    <Container className="mainSection">
      <h1 className="text-center mt-5">Noticias</h1>
      <hr />
      <Formulario />
    </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
