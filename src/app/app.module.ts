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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
