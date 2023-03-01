import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToRoute() {
    /* FAILING NAVIGATION */
    this.router.navigate(['/accounts/49cffaa2-230c-4e73-a1d7-7ad89fe19fe8/submission', {outlets: { 'secondary': 'tasks'}} ]);

    /* THIS ONE NAVIGATES TO RIGHT PATH BUT  Account.routes does not redirect to  SUBMISSION AS EXPECTED*/
    // this.router.navigate([`/accounts/49cffaa2-230c-4e73-a1d7-7ad89fe19fe8`, {outlets: { 'secondary': ['tasks']}} ], { relativeTo: this.activatedRoute.parent });

  }
}
