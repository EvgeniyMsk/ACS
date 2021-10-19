import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const PATH = "http://localhost:8080/people/kremlin_8";
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http : HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(PATH);
  }
}
