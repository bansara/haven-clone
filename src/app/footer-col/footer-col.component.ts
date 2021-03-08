import { Component, OnInit, Input } from '@angular/core';
import { FooterCol } from 'src/interfaces/footerCol';

@Component({
  selector: 'app-footer-col',
  templateUrl: './footer-col.component.html',
  styleUrls: ['./footer-col.component.css'],
})
export class FooterColComponent implements OnInit {
  @Input() data: FooterCol;
  constructor() {}

  ngOnInit(): void {}
}
