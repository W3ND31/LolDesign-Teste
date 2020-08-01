import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "../style/defaultTheme";

interface IProps {
  id: string | undefined;
  name: string;
  label: string;
  value: number | string;
  listData: ListData[];
  handleChange: any;
}

interface ListData {
  value: number | string;
  descricao: string;
}

const ComboBox = (props: IProps) => {
  const { id, name, label, value, listData, handleChange } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel id={`${id}Label`}>{label}</InputLabel>
      <Select
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        autoWidth
      >
        <MenuItem value={0}>Selecione</MenuItem>
        {listData.map((item: any, index: number) => {
          return (
            <MenuItem key={index.toString()} value={item.value}>
              {item.descricao}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ComboBox;
