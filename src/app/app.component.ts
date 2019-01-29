import { Component } from '@angular/core';
import { CategoriesComponent} from './categories/categories.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Craiglist';
  Craiglist: CategoriesComponent[] = [

  ]
  createCategories(categories, events, price, description) {
    let newCraiglist = new CategoriesComponent(categories, events, price, description);
    this.Craiglist.push(newCraiglist);
  }
}
