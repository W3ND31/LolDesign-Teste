import React, { useEffect, useState } from "react";
import { TextField, Grid, InputAdornment } from "@material-ui/core";
import { useStyles } from "../style/defaultTheme";
import DadosForm from "../model/dadosForm";
import Planos from "../model/planos";
import Valores from "../model/valores";
import Resultados from "../model/resultados";
import { listValores, planos } from "../util/consts";
import { formatNumber } from "../util/utils";

interface IProps {
  data: DadosForm;
}

const INITIAL_RESULTADOS: Resultados = {
  comFaleMais: 0.0,
  semFaleMais: 0.0,
};

const Results = (props: IProps) => {
  const classes = useStyles();
  const [resultados, setResultados] = useState<Resultados>(INITIAL_RESULTADOS);
  const { data } = props;

  useEffect(() => {
    calcularValores(data);
  }, [data]);

  const calcularValores = (dados: DadosForm) => {
    let valor: Valores | undefined;
    let plano: Planos | undefined;
    let result: Resultados = { comFaleMais: 0, semFaleMais: 0 };

    listValores.forEach((item) => {
      if (item.origem === dados.origem && item.destino === dados.destino)
        return (valor = item);
    });

    planos.forEach((item) => {
      if (item.id === dados.plano) return (plano = item);
    });

    if (plano !== undefined && valor !== undefined && dados.tempo !== null) {
      if (dados.tempo < plano.qtdeMinutos) {
        result.comFaleMais = 0.0;
        result.semFaleMais = dados.tempo * valor.valor;
      } else {
        result.comFaleMais =
          (dados.tempo - plano.qtdeMinutos) * valor.valor * 1.1;
        result.semFaleMais = dados.tempo * valor.valor;
      }

      result.comFaleMais = formatNumber(result.comFaleMais);
      result.semFaleMais = formatNumber(result.semFaleMais);
    } else {
      result.comFaleMais = "-";
      result.semFaleMais = "-";
    }
    return setResultados(result);
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          disabled
          id="comFaleMais"
          label="Com FaleMais"
          value={resultados.comFaleMais}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          disabled
          id="semFaleMais"
          label="Sem FaleMais"
          value={resultados.semFaleMais}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            disableUnderline: true,
          }}
        ></TextField>
      </Grid>
    </Grid>
  );
};

export default Results;
