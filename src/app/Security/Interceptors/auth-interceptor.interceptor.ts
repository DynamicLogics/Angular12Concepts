import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

/*

 1] Here you need to create a class that implements the HttpInterceptor interface. 
    This interface has two methods that you can implement: intercept and handleError. The intercept 
    method is called for each HTTP request, and the handleError method is called if an error occurs.

 2] Here, the intercept method checks if an authentication token is present in local storage. 
    If it is, the interceptor creates a new HttpRequest object with an Authorization header 
    containing the token. This new request is then passed on to the next interceptor or the HTTP client.

 3] To create interceptor use below command:
    ng g interceptor <interceptor-name>

 4] Further inside the AppModule class add the interceptor related dependency inside 'providers' array
    to use your interceptor

*/

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor,OnInit {

  constructor() {
    console.log('Inside AuthInterceptorInterceptor File');
  }

  ngOnInit(): void {
    console.log('Setting Authorization token');
    localStorage.setItem('authToken','ABC-1345-xyZwer@456789');
    //throw new Error('Method not implemented.');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(`HTTP ${request.method} ${request.url}`);

    const authToken = localStorage.getItem('authToken');

    if(authToken){
      const authRequest = request.clone({
        headers: request.headers.set('Authorization','Bearer ${authToken}')
      });

      console.log('AuthRequest: '+authRequest);

      console.log('HTPP URL: '+next.handle(authRequest));

      return next.handle(authRequest).pipe(
        tap(
          event => console.log(`HTTP ${request.method} ${request.url} response:`, event),
          error => console.log(`HTTP ${request.method} ${request.url} error:`, error)
        )
      );

    }

    return next.handle(request);

  }
  
}
function tap(arg0: (event: any) => void, arg1: (error: any) => void): import("rxjs").OperatorFunction<HttpEvent<any>, HttpEvent<unknown>> {
  throw new Error('Function not implemented.');
}

