import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DesignConceptComponent } from './component/design-concept/design-concept.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { HowWeWorkComponent } from './component/how-we-work/how-we-work.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'designConcept',
    component: DesignConceptComponent,
  },
  {
    path: 'whatWeDo',
    component: WhatWeDoComponent,
  },
  {
    path: 'howWeWork',
    component: HowWeWorkComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
];
