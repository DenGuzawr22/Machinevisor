import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  public goToPage(page: string){
    this.router.navigate([page]);
  }

  public goToPageWithParameters(page: string, param1:any){
    this.router.navigate([page, param1.toString()]);
  }

  public goToPageWithTwoParameters(page: string, param1:any, param2:any){
    this.router.navigate([page, param1.toString(), param2.toString()]);
  }

  public refreshPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
