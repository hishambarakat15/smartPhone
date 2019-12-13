import { Injectable } from '@angular/core';
import {category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: category[];
  constructor() {
    this.categories.push(new category('cat-1','iphone'));
    this.categories.push(new category('cat-2','samsung'));
    this.categories.push(new category('cat-3','htc'));

  }

  getCategories():category[] {
    return this.categories;
  }
}
