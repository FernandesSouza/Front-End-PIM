import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from 'src/app/Models/FuncionarioModel';
import { CadastroService } from 'src/app/service/cadastroService';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {


  constructor(private cadastroService: CadastroService, private datePipe: DatePipe) {}

matriculaAdicionar = 0;
idempresaAdicionar = null;
usuarioAdicionar = '';
rgAdicionar = '';
emailAdicionar = '';
jornadaAdicionar = null;
pisAdicionar = '';
salarioAdicionar = 0;
cepAdicionar = '';
nomeAdicionar = '';
funcaoAdicionar = ''
insalubridadeAdicionar = null;
dependenteAdicionar = null;
valerefeicaoAdicionar = null;
cpfAdicionar = '';
periculosidadeAdicionar = null;
telefoneAdicionar = ''
plsaudeAdicionar = null;
transporteAdicionar = null;
senhaAdicionar = '';
setorAdicionar = '';
dataAdmissao = ''



  ngOnInit(): void {

   this.CadastrarFuncionario();
  }

  CadastrarFuncionario() {

    const dataAdmissaoFormatada = this.dataAdmissao ? this.datePipe.transform(this.dataAdmissao, 'yyyy-MM-dd') : null;
    dataAdmissao: Date
    const novoFuncionario: FuncionarioModel = {
      matricula: this.matriculaAdicionar,
      idempresa: this.idempresaAdicionar,
      usuario: this.usuarioAdicionar,
      rg: this.rgAdicionar,
      email: this.emailAdicionar,
      jornada: this.jornadaAdicionar,
      pis: this.pisAdicionar,
      salario: this.salarioAdicionar,
      cep: this.cepAdicionar,
      nome: this.nomeAdicionar,
      funcao: this.funcaoAdicionar,
      adcinsalubridade: this.idempresaAdicionar,
      dependentes: this.dependenteAdicionar,
      valerefeicao: this.valerefeicaoAdicionar,
      cpf: this.cpfAdicionar,
      adcpericulosidade: this.periculosidadeAdicionar,
      telefone: this.telefoneAdicionar,
      plsaude: this.plsaudeAdicionar,
      valetransp: this.transporteAdicionar,
      senha: this.senhaAdicionar,
      setor:this.setorAdicionar,

      dataAdmissao: dataAdmissaoFormatada ? new Date(dataAdmissaoFormatada) : new Date()


    };

    this.cadastroService.cadastrarFuncionario(novoFuncionario).subscribe(
      resposta => {

        alert('FUNCIONARIO CADASTRADO')

      },
      erro => {
        console.error('Erro ao cadastrar:', erro);


        if (erro.error instanceof ErrorEvent) {
          console.error('Erro do cliente:', erro.error.message);
        } else {
          console.error(`Erro ${erro.status} - ${erro.error}`);
        }
      }
    );
  }
}
