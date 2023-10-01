import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = environment.api;
  constructor(private http: HttpClient) { }
  
  save(model:Form) {
    return this.http.post<Form>(this.apiUrl+'/save.php',model);
  }

  delete(id:number) {
    return this.http.get<Form>(this.apiUrl+'/delete.php?id='+id);
  }

}
