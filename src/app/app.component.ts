import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'haven-clone';

  categories: Category[] = [
    {
      name: 'Media Coverage',
      articles: [
        {
          title: "Dying is expensive. Haven Life isn't.",
          imgSrc: 'https://havenlife.com/img/page/press/economist.png',
        },
        {
          title: 'Haven Life: great insurance or the greatest insurance?',
          imgSrc: 'https://havenlife.com/img/page/press/realsimple.png',
        },
        {
          title: "Craven mavens savin' with Haven",
          imgSrc: 'https://havenlife.com/img/page/press/iir.png',
        },
        {
          title:
            "I know what you're thinking and yes, this is the best headline ever",
          imgSrc: 'https://havenlife.com/img/page/press/tearsheet.png',
        },
        {
          title:
            'Who would win in a fight - Jake from State Farm or a medium-sized bear?',
          imgSrc: 'https://havenlife.com/img/page/press/adweek.png',
        },
      ],
    },
    {
      name: 'Press Releases',
      articles: [
        {
          title: "Haven's Raven eats Geico's Gecko",
          imgSrc: 'https://havenlife.com/img/page/press/bloomberg.png',
        },
        {
          title: "Savin' and Ravin': Haven life goes to Burning Man",
          imgSrc: 'https://havenlife.com/img/page/press/entrepreneur.png',
        },
        {
          title:
            'Haven Life to sponsor "D-List Celebrity Bear Fights" on ESPN 8',
          imgSrc: 'https://havenlife.com/img/page/press/adweek.png',
        },
        {
          title:
            "Jake from State Farm mauled by bear, didn't have life insurance",
          imgSrc: 'https://havenlife.com/img/page/press/bloomberg.png',
        },
        {
          title:
            'Top 10 reasons to never fight a bear: Number 7 was pretty obvious in retrospect',
          imgSrc: 'https://havenlife.com/img/page/press/usatoday.png',
        },
        {
          title:
            'Next week on "D-List Celebrity Bear Fights": Susan from The Bachelorette season 37',
          imgSrc: 'https://havenlife.com/img/page/press/adweek.png',
        },
      ],
    },
    {
      name: 'Research',
      articles: [
        {
          title: 'Will my children murder me to collect my policy benefits?',
        },
        {
          title: 'How to detect poison in your coffee',
        },
        {
          title:
            'Should you fake your own death to escape your psychotic childen? Experts disagree.',
        },
        {
          title:
            'What would happen to my family if I were mauled by a ferocious animal on live TV?',
        },
      ],
    },
  ];
  selected: string = this.categories[0].name;
  prevSelected: string = '';
  scrollToSection(sectionName: string) {
    const id = sectionName.split(' ')[0];
    const section = document.getElementById(id);
    const location = section.getBoundingClientRect();
    window.scrollTo({
      top: window.pageYOffset + location.top - 112,
      left: 0,
      behavior: 'smooth',
    });
  }

  observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.selected = entry.target.getAttribute('data-section');
        }
      });
    });
    const sections = document.querySelectorAll('.category-name');
    sections.forEach((section) => this.observer.observe(section));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
