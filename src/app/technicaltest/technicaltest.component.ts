import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuestionService} from "../service/question.service";
import {interval} from "rxjs";
import {TokenStorageService} from "../token-storage.service";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";
import {TestService} from "../service/test.service";

@Component({
  selector: 'app-technicaltest',
  templateUrl: './technicaltest.component.html',
  styleUrls: ['./technicaltest.component.scss']
})
export class TechnicaltestComponent implements OnInit {

  constructor(private questionService: QuestionService,
              private testService: TestService,
              private tokenStorage: TokenStorageService,
              private router:Router) {
  }

  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  isDisabled = true;
  currentUser: any;


  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
    this.currentUser = this.tokenStorage.getUser();

  }

  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  prevQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.incorrectAnswer++;
        this.getProgressPercent();
      }, 1000);
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(() => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100)
      .toFixed(0)
      .toString();

    return this.progress;
  }


  addTechResult() {
    const candidate = {
      name: this.currentUser.name,
      email: this.currentUser.email,
      password: this.currentUser.password,
      last_name: this.currentUser.last_name,
      Birth_date: this.currentUser.Birth_date,
      gender: this.currentUser.gender,
      phone: this.currentUser.phone,
      creation_date: this.currentUser.creation_date,
      status: this.currentUser.status,
      test_status: "started",
      departement: this.currentUser.departement,
      tech_test: this.points,
      tech_test_status: "completed",
    };
    this.testService.updateirtscore(candidate, this.currentUser.id).subscribe((data) => {
      console.log('added')
      let mySessionData = JSON.parse(window.sessionStorage.getItem('auth-user')|| '{}');
      mySessionData.tech_test_status = 'completed'
      sessionStorage.setItem('auth-user', JSON.stringify(mySessionData));
      this.router.navigate(['/quizchoice'])

    });
  }
}
