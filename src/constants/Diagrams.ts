export interface scaleDiagramProps {
  name: string;
  value: number;
  color: string;
}

export interface pieDiagramProps {
  title: string;
  value: number;
  color: string;
}

export interface donutDiagramProps {
  title: string;
  value: number;
  color: string;
}

export const scaleDiagram: Array<scaleDiagramProps> = [
  { name: 'Statisctic 1', value: 7, color: '#333333' },
  { name: 'Statisctic 2', value: 3, color: '#503f3f' },
  { name: 'Statisctic 3', value: 5, color: '#6d4b4b' },
  { name: 'Statisctic 4', value: 1, color: '#a86464' },
  { name: 'Statisctic 5', value: 8, color: '#e27c7c' },
];

export const pieDiagram: Array<pieDiagramProps> = [
  { title: 'One', value: 10, color: '#54bebe' },
  { title: 'Two', value: 15, color: '#dedad2' },
  { title: 'Three', value: 20, color: '#e4bcad' },
  { title: 'Four', value: 9, color: '#d7658b' },
  { title: 'Five', value: 19, color: '#c80064' },
];

export const donutDiagram: Array<donutDiagramProps> = [
  { title: 'One', value: 4, color: '#63bff0' },
  { title: 'Two', value: 15, color: '#b3bfd1' },
  { title: 'Two', value: 10, color: '#a4a2a8' },
  { title: 'Three', value: 20, color: '#df8879' },
  { title: 'Four', value: 9, color: '#cbd6e4' },
  { title: 'Five', value: 19, color: '#b04238' },
];
