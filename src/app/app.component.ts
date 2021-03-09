import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'haven-clone';

  categories: Category[];
  getCategories(): void {
    this.categories = this.categoriesService.getCategories();
  }
  selected: string = '';
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

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getCategories();
    this.selected = this.categories[0].name;
  }
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
