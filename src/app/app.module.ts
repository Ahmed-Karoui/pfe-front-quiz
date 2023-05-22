import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { QuizchoiceComponent } from './quizchoice/quizchoice.component';
import { TechnicaltestComponent } from './technicaltest/technicaltest.component';
import { PsychologicaltestComponent } from './psychologicaltest/psychologicaltest.component';
import { IrttestComponent } from './irttest/irttest.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    QuizchoiceComponent,
    TechnicaltestComponent,
    PsychologicaltestComponent,
    IrttestComponent,
    LoginComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,BrowserAnimationsModule,ToastrModule.forRoot(
      {
        maxOpened: 1,
        progressBar: true,
        progressAnimation: 'decreasing',
        preventDuplicates: true,
      }),
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
