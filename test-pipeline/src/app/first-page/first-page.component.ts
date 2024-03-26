import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  title = 'test-pipeline';

  constructor() {
  }

  ngOnInit(): void {
  }
}
