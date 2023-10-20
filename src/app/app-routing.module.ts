import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MenuFuncionarioComponent } from "./components/menu-funcionario/menu-funcionario.component";
import { HoleriteComponent } from "./components/holerite/holerite.component";
import { MenuGerenteComponent } from "./components/menu-gerente/menu-gerente.component";
import { CadastroFuncionarioComponent } from "./components/cadastro-funcionario/cadastro-funcionario.component";


const routes: Routes = [

  {path: '',component: LoginComponent},
  {path: 'menu-funcionario',component: MenuFuncionarioComponent},
  {path: 'holerite', component: HoleriteComponent},
  {path: 'menu-gerente', component: MenuGerenteComponent},
  {path: 'cadastro-funcionario', component: CadastroFuncionarioComponent}


]

@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]



})

export class AppRoutingModule{}

