import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container } from 'react-bootstrap';
import FormularioColores from './components/FormularioColores';

function App() {
  return (
    <Container>
      <h1>Paleta de colores</h1>
      <hr />
      <FormularioColores></FormularioColores>
    </Container>
  );
}

export default App;
