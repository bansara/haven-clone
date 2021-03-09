import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { categories } from '../data/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}
  getCategories(): Category[] {
    return categories;
  }
}
