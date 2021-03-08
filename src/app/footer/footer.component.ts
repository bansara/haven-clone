import { Component, OnInit } from '@angular/core';
import { FooterCol } from '../../interfaces/footerCol';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerData: FooterCol[] = [
    {
      header: 'Products',
      links: [
        'Haven Term',
        'Haven Simple',
        'Haven Secure',
        'Haven Salary Protection',
        'AgeUp',
      ],
    },
    {
      header: 'About Us',
      links: [
        'Who we are',
        'Why Haven Life',
        'Customer Reviews',
        'Refer a friend',
        'Press',
        'Careers',
      ],
    },
    {
      header: 'Help',
      links: ['FAQ', 'Blog', 'Contact Us'],
    },
  ];
  constructor() {}
  subscribeEmail: string = '';
  ngOnInit(): void {}
}
