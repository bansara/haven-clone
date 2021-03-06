import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  selected: string = '';
  setSelectedMenu(name: string, svg: string) {
    const allChevrons = document.querySelectorAll('.chevron');
    allChevrons.forEach((chevron) => chevron.classList.remove('rotate'));
    this.selected = this.selected === name ? '' : name;
    this.showMenu = this.selected.length ? true : false;
    const chevron = document.getElementById(svg);
    if (this.selected === name) {
      chevron.classList.add('rotate');
    } else {
      chevron.classList.remove('rotate');
    }
  }
  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // window.addEventListener('click', function (e) {
    //   const showingMenu = document.querySelector('.menu.showing');
    //   showingMenu.classList.remove('showing');
    // });
  }
}
