import DDD from '../model/ddd';
import Valores from '../model/valores';
import Planos from '../model/planos';

export const listDDD: DDD[] = [
  {codigo: 11, descricao: '011'},
  {codigo: 16, descricao: '016'},
  {codigo: 17, descricao: '017'},
  {codigo: 18, descricao: '018'},
];

export const listValores: Valores[] = [
  {origem: 11, destino: 16, valor: 1.9},
  {origem: 16, destino: 11, valor: 2.9},
  {origem: 11, destino: 17, valor: 1.7},
  {origem: 17, destino: 11, valor: 2.7},
  {origem: 11, destino: 18, valor: 0.9},
  {origem: 18, destino: 11, valor: 1.9},
];

export const planos: Planos[] = [
  {id: 1, descricao: 'FaleMais 30', qtdeMinutos: 30},
  {id: 2, descricao: 'FaleMais 60', qtdeMinutos: 60},
  {id: 3, descricao: 'FaleMais 120', qtdeMinutos: 120},
];
