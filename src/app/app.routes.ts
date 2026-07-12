import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DesignConceptComponent } from './component/design-concept/design-concept.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { HowWeWorkComponent } from './component/how-we-work/how-we-work.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { EmailJSComponent } from './component/email-js/email-js.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - 9emdesign Branding & Marketing Studio', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
    title: 'About Us - Get to know 9em design studio', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
  {
    path: 'designConcept',
    component: DesignConceptComponent,
    title: 'Design Concept - Here is our design philosophy', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
  {
    path: 'whatWeDo',
    component: WhatWeDoComponent,
    title: 'Wat we do - Know our design process', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
  {
    path: 'howWeWork',
    component: HowWeWorkComponent,
    title: 'How we work - Get insigts on our design pipeline', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
    title: 'Contact Us - Get in touch with 9emdesign studio', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
  {
    path: 'service_form',
    component: EmailJSComponent,
    title: 'Service request form - Submit your project details / ideas', // Angular handles titles natively!
    data: {
      description:
        'Welcome to our homepage! Discover our amazing Angular 18 services.',
      keywords: 'home, angular 18, web development, prerender',
    },
  },
];
