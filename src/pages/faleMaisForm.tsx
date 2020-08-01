import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { listDDD, planos } from "../util/consts";
import ComboBox from "../components/comboBox";
import { useStyles } from "../style/defaultTheme";
import DadosForm from "../model/dadosForm";

interface IProps {
  handleSubmit: any;
}

const INITIAL_STATE: DadosForm = {
  origem: 0,
  destino: 0,
  tempo: 0,
  plano: 0,
};

const FaleMaisForm = (props: IProps) => {
  const [formData, setFormData] = useState<DadosForm>(INITIAL_STATE);
  const { handleSubmit } = props;
  const classes = useStyles();

  useEffect(() => {
    if (
      formData.origem !== 0 &&
      formData.destino !== 0 &&
      formData.tempo !== 0 &&
      formData.plano !== 0
    ) {
      handleSubmit(formData);
    }
  }, [formData, handleSubmit]);

  const handleChange = (event: any) => {
    let evento = event.target;
    if (evento.name === "tempo") {
      if (evento.value[0] === "0") {
        evento.value = evento.value.slice(1);
      }
    }
    setFormData((e) => {
      return { ...e, [evento.name]: Number(evento.value) };
    });
  };

  const handleClear = () => {
    setFormData(INITIAL_STATE);
    handleSubmit(INITIAL_STATE);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <ComboBox
          id="origem"
          name="origem"
          label="Origem"
          dataTestId="origemSelect"
          value={formData.origem}
          handleChange={handleChange}
          listData={listDDD.map((ddd) => {
            return { value: ddd.codigo, descricao: ddd.descricao };
          })}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <ComboBox
          id="destino"
          name="destino"
          label="Destino"
          value={formData.destino}
          handleChange={handleChange}
          dataTestId="destinoSelect"
          listData={listDDD.map((ddd) => {
            return { value: ddd.codigo, descricao: ddd.descricao };
          })}
        />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.textField}>
        <TextField
          className={classes.formControl}
          id="tempo"
          name="tempo"
          label="Tempo"
          type="number"
          inputProps={{
            "data-testid": "tempoTextField",
          }}
          value={formData.tempo}
          placeholder="Tempo em Minutos"
          onChange={(e) => handleChange(e)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <ComboBox
          id="plano"
          name="plano"
          label="Plano"
          dataTestId="planoSelect"
          value={formData.plano}
          handleChange={handleChange}
          listData={planos.map((plano) => {
            return { value: plano.id, descricao: plano.descricao };
          })}
        />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          id="limparCampos"
          name="limparCampos"
          data-testid="btnLimpar"
          onClick={() => handleClear()}
        >
          Limpar Campos
        </Button>
      </Grid>
    </Grid>
  );
};

export default FaleMaisForm;
