import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs';
import { MainUIComponentComponent } from './main-uicomponent/main-uicomponent.component';
import { DetailsshowingComponentComponent } from './detailsshowing-component/detailsshowing-component.component';
import { Factoryclass } from './factoryclass';

@Injectable({
  providedIn: 'root'
})
export class ServiceLogicService 
{
  public factoryobject= new Factoryclass();
  private url = 'https://localhost:44337/api/user';
  public searchdetails:any=[];
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  
  apicallselect():Observable<any>
  {  
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get("https://localhost:44337/api/user",{ headers: headers });
  }

  apicallUserdetails(payload:any):Observable<any>
  { 
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("https://localhost:44337/getuserdetails",payload,{ headers: headers });
  }

  apicallinsert(payload:any):Observable<any>
  {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("https://localhost:44337/insertuserdetails",payload, { headers: headers });
  }

  apicalldelete(payload:any)
  {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.delete("https://localhost:44337/"+payload,{ headers: headers });
  }

  apicalluserexist(payload:any):Observable<any>
  {  
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("https://localhost:44337/"+payload,{ headers: headers });
  }

  setData (data:any) 
  {
    this.searchdetails = data;
  }

}
