import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, Container } from "@material-ui/core";
import theme from "./style/defaultTheme";
import FaleMaisForm from "./pages/faleMaisForm";
import AppHeader from "./components/appHeader";
import DadosForm from "./model/dadosForm";
import Results from "./pages/results";

const INITIAL_FORM_DATA: DadosForm = {
  origem: 0,
  destino: 0,
  tempo: 0,
  plano: 0,
};

function App() {
  const [formData, setFormData] = useState<DadosForm>(INITIAL_FORM_DATA);
  const [show, setShow] = useState(false);

  const handleSubmit = (dados: DadosForm) => {
    console.log(dados);
    if (
      dados.origem === 0 &&
      dados.destino === 0 &&
      dados.tempo === 0 &&
      dados.plano === 0
    ) {
      setShow(false);
      return setFormData(INITIAL_FORM_DATA);
    }
    setFormData(dados);
    setShow(true);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader label="Fale Mais">
          <Container>
            <FaleMaisForm handleSubmit={handleSubmit}></FaleMaisForm>
            {show && <Results data={formData} />}
          </Container>
        </AppHeader>
      </ThemeProvider>
    </div>
  );
}

export default App;
