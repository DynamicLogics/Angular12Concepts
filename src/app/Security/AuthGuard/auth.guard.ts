import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*

1] To generate authguard file you need to put below command in angular CLI:
   'ng generate guard auth'

2] Here, modify the 'canActivate' method to check if the user is authenticated to access the routes
   or not

3] Now once you have implemented you user validation logic into 'canActivate' method then
   inside the routing module page i.e. 'AppRoutingModule' the route that you 
   want to guard do the below setting:

   {path:'',component:ParentComponent, canActivate:[AuthGuard]}

4] Now, whenever you will try to access that rotuing URL then will call the 'canActivate' method
   of 'AuthGuard' class and check your user val;idation logic

*/

export class AuthGuard implements CanActivate {
  
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/

  accessState:boolean=true;

  constructor(private router: Router) {}

  canActivate(): boolean{
      
    if(this.accessState==true){
        return true;
    }else{
         this.router.navigate(['404']);
         return false;
    }

  }

  
}
