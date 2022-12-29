import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-quizchoice',
  templateUrl: './quizchoice.component.html',
  styleUrls: ['./quizchoice.component.scss']
})
export class QuizchoiceComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }

}
