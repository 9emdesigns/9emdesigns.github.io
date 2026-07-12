import { Component, OnInit, inject } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = '9emdesigns.github.io';

  // Inject Angular 18 services
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private meta = inject(Meta);

  ngOnInit() {
    // Listen for route changes to automatically update meta tags
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          // Deep dive to find the active child route
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        this.updateMetaTags(data['description'], data['keywords']);
      });
  }

  private updateMetaTags(description: string, keywords: string) {
    // Dynamically update or clean up the description tag
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    } else {
      this.meta.removeTag("name='description'");
    }

    // Dynamically update or clean up the keywords tag
    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    } else {
      this.meta.removeTag("name='keywords'");
    }
  }
}
