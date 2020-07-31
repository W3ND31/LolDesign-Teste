import React, { useState } from "react";
import { Grid} from "@material-ui/core";
import { listDDD, planos } from "../util/consts";
import ComboBox from "../components/comboBox";

const INITIAL_FORM_DATA = {
  origem: "",
  destino: "",
  plano: "",
};

const FaleMaisForm = (props: any) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (event: any) => {
    console.log(event.target);
    setFormData((e) => {
      return { ...e, [event.target.name]: event.target.value };
    });
  };

  //TODO: Implementar o botão de submit do formulário


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <ComboBox
          id="origem"
          name="origem"
          label="Origem"
          value={formData.origem}
          handleChange={handleChange}
          listData={listDDD.map((ddd) => {
            return { value: ddd.codigo, descricao: ddd.descricao };
          })}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ComboBox
          id="destino"
          name="destino"
          label="Destino"
          value={formData.destino}
          handleChange={handleChange}
          listData={listDDD.map((ddd) => {
            return { value: ddd.codigo, descricao: ddd.descricao };
          })}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ComboBox
          id="plano"
          name="plano"
          label="Plano"
          value={formData.plano}
          handleChange={handleChange}
          listData={planos.map((plano) => {
            return { value: plano.id, descricao: plano.descricao };
          })}
        />
      </Grid>
    </Grid>
  );
};

export default FaleMaisForm;
