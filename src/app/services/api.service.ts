import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any>{
    return this.http.get('http://localhost:4500/services');
  }
<<<<<<< HEAD
  getProjects(): Observable<any> { 
    return this.http.get('http://localhost:4500/projects');
=======

  addEnquiry(data:any):Observable<any>{
    return this.http.post('http://localhost:4500/enquiries', data);
>>>>>>> e2cd65ebdec06525441aab14e9745ae624783f42
  }
}
