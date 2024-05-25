import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  cUrl="http://localhost:7700/signup";
  apiUrl="http://localhost:7700/login";
  constructor(private http:HttpClient) { }
  createData(data:any):Observable<any>{
    console.log(data,'Data Created');
    return this.http.post(`${this.cUrl}`,data);
  }
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
}
checkData(password:any):Observable<any>{
  let ids=password;
  return this.http.get(`${this.apiUrl}/${ids}`);
  
}
}
