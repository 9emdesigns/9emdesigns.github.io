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
        'Welcome to our homepage! Discover our small business branding and marketing services',
      keywords:
        'angular 18, web development,branding,marketing,graphic design,web development',
    },
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
    title: 'About Us - Get to know 9em design studio', // Angular handles titles natively!
    data: {
      description:
        '9emdesign builds affordable, high-impact branding and web design for growing businesses. We turn concepts into full digital ecosystems tailored for growth.',
      keywords:
        '9emdesign, affordable branding, high-impact marketing, small business branding, user-centered design, agile methodology, digital ecosystems, visual identity, collaborative design process',
    },
  },
  {
    path: 'designConcept',
    component: DesignConceptComponent,
    title: 'Design Concept - Here is our design philosophy', // Angular handles titles natively!
    data: {
      description:
        'Empower your audience through minimalist, user-centered design. 9emdesign creates clear, high-impact brand identities that connect and convert.',
      keywords:
        'minimalist design, audience-first philosophy, visual clarity, user-centered framework, brand strategy, visual assets, customer-centric design, transparent experience',
    },
  },
  {
    path: 'whatWeDo',
    component: WhatWeDoComponent,
    title: 'Wat we do - Know our design process', // Angular handles titles natively!
    data: {
      description:
        'Drive measurable ROI with audience-first branding, high-performing websites, and scalable digital experiences built through agile collaboration at 9emdesign.',
      keywords:
        'visual communication, audience-first design, brand identity, digital experiences, creative strategy, design systems, measurable ROI, 9em design, business growth solutions',
    },
  },
  {
    path: 'howWeWork',
    component: HowWeWorkComponent,
    title: 'How we work - Get insigts on our design pipeline', // Angular handles titles natively!
    data: {
      description:
        'We bridge the gap between creative design and technical execution. Get cohesive branding, web design, and digital marketing without agency friction.',
      keywords:
        'technical execution, creative artistry, cohesive branding, responsive web design, mobile scalability, marketing strategy, transparent collaboration, custom logo design',
    },
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
    title: 'Contact Us - Get in touch with 9emdesign studio', // Angular handles titles natively!
    data: {
      description:
        'Get in touch with us, tell us your ideas and let us bring them to life with our amazing design and marketing services!',
      keywords:
        'ideas,amazing design,graphic design, webdevelopment, marketing,branding',
    },
  },
  {
    path: 'service_form',
    component: EmailJSComponent,
    title: 'Service request form - Submit your project details / ideas', // Angular handles titles natively!
    data: {
      description:
        'Tell us your dreams and let us bring them to life with our amazing design and marketing services!',
      keywords:
        'ideas,amazing design,graphic design, webdevelopment, marketing,branding',
    },
  },
];
