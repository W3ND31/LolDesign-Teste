import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import {listDDD} from '../util/consts';
import ComboBoxDDD from '../components/comboBoxDDD';

const INITIAL_FORM_DATA = {
  origem: '',
  destino: '',
  plano: '',
};

const FaleMaisForm = (props: any) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (event: any) => {
    console.log(event.target);
    setFormData((e) => {
      return {...e, [event.target.name]: event.target.value};
    });
  };

  return (
    <Container className="formContainer">
      <ComboBoxDDD
        id="origem"
        name="origem"
        label="Origem"
        value={formData.origem}
        handleChange={handleChange}
        listData={listDDD}
      />

      <ComboBoxDDD
        id="destino"
        name="destino"
        label="Destino"
        value={formData.destino}
        handleChange={handleChange}
        listData={listDDD}
      />
    </Container>
  );
};

export default FaleMaisForm;
