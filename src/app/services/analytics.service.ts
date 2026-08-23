import { Injectable } from '@angular/core';
declare const gtag: Function;
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private trackingId = 'G-7DVH2L4ERE';
  public trackPageView(pagePath: string, pageTitle: string): void {
    if (typeof gtag !== 'undefined') {
      gtag('config', this.trackingId, {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  }

  constructor() {}
}
