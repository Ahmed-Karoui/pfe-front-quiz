import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from "../token-storage.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../users.service";

@Component({
  selector: 'app-quizchoice',
  templateUrl: './quizchoice.component.html',
  styleUrls: ['./quizchoice.component.scss']
})
export class QuizchoiceComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor(private tokenStorage: TokenStorageService,
              private toastr: ToastrService,
              private router: Router,
              private UserService: AuthService) {
  }

  currentUser: any;
  currentUser2: any;

  UpdatedUser: any;
  irt_status: boolean = false;
  psy_status: boolean = false;
  tech_status: boolean = false;


  ngOnInit(): void {

    this.currentUser = this.tokenStorage.getUser();
    if (this.currentUser.irt_test_status == "completed") {
      this.irt_status = true
    }
    if (this.currentUser.tech_test_status == "completed") {
      this.tech_status = true
    }
    if (this.currentUser.psy_test_status == "completed") {
      this.psy_status = true
    }

  }

  checkirt() {

  }

  startQuizIRT() {
    if (this.irt_status) {
      console.log(this.irt_status)
      this.toastr.error('You Have Already Responded to this Quiz!', 'Access Denied!');
      // @ts-ignore
      document.getElementById("quiz-button").disabled = true;
    } else {
      this.router.navigate(['/irtquiz'])
    }
  }

  startQuizPsy() {
    if (this.psy_status) {
      console.log(this.psy_status)
      this.toastr.error('You Have Already Responded to this Quiz!', 'Access Denied!');
      // @ts-ignore
      document.getElementById("quiz-button-psy").disabled = true;

    } else {
      this.router.navigate(['/psychologicaltest'])
    }

  }

  startQuizTech() {
    if (this.tech_status) {
      console.log(this.tech_status)
      this.toastr.error('You Have Already Responded to this Quiz!', 'Access Denied!');
      // @ts-ignore
      document.getElementById("quiz-button-tech").disabled = true;

    } else {
      this.router.navigate(['/technicalquiz'])
    }

  }
}
