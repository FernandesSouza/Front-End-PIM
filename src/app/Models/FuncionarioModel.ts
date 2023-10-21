export interface FuncionarioModel{

  matricula: number;
  idempresa?: number | null;
  usuario?: string | null;
  rg?: string | null;
  email?: string | null;
  jornada?: number | null;
  pis?: string | null;
  salario: number;
  cep?: string | null;
  nome?: string | null;
  funcao?: string | null;
  adcinsalubridade?: number | null;
  dependentes?: number | null;
  valerefeicao?: number | null;
  cpf?: string | null;
  adcpericulosidade?: number | null;
  telefone?: string | null;
  plsaude?: number | null;
  valetransp?: number | null;
  senha?: string | null;
  setor?: string | null;
  dataAdmissao: Date;





}
