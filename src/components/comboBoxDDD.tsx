import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import DDD from '../model/ddd';

interface IProps {
  id: string | undefined;
  name: string;
  label: string;
  value: number | string;
  listData: DDD[];
  handleChange: any;
}

const ComboBoxDDD = (props: IProps) => {
  const {id, name, label, value, listData, handleChange} = props;

  return (
    <FormControl>
      <InputLabel id={`${id}Label`}>{label}</InputLabel>
      <Select id={id} name={name} value={value} onChange={(e) => handleChange(e)}>
        {listData.map((item: any, index: number) => {
          return (
            <MenuItem key={index.toString()} value={item.codigo}>
              {item.descricao}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ComboBoxDDD;
