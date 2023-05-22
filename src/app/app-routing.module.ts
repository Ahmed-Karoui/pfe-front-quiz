import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {QuizchoiceComponent} from "./quizchoice/quizchoice.component";
import {TechnicaltestComponent} from "./technicaltest/technicaltest.component";
import {IrttestComponent} from "./irttest/irttest.component";
import {PsychologicaltestComponent} from "./psychologicaltest/psychologicaltest.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'quizchoice',
    component: QuizchoiceComponent,
  },
  {
    path: 'technicalquiz',
    component: TechnicaltestComponent,
  },
  {
    path: 'irtquiz',
    component: IrttestComponent,
  },
  {
    path: 'psychologicaltest',
    component: PsychologicaltestComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
