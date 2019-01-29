import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EventsComponent } from './events/events.component';
import { BuyingComponent } from './buying/buying.component';
import { SellingComponent } from './selling/selling.component';
import { PersonalsComponent } from './personals/personals.component';
import { ForumComponent } from './forum/forum.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  
  },
  {
    path: 'events',
    component: EventsComponent,
  
  },
  {
    path: 'buying',
    component: BuyingComponent,
  
  },
  {
  path: 'selling',
    component: SellingComponent,
  
  },
  {
  path: 'personals',
    component: PersonalsComponent,
  
  },
  {
  path: 'forums',
    component: ForumComponent,
  
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);