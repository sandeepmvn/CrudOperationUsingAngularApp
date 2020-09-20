import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Interceptor Logic
    alert("Request is pass through Interceptor")
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer authtest` }
    });
    return next.handle(authReq);
  }
}
