import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { main } from 'src/main/main';
import { identifierName } from '@angular/compiler';
import { map } from 'rxjs';


interface ProjectsResponse {
  id: string;
  text: string;
  Des: string;
  button: string;
  image: { url: string; };
}
interface header {
  id: string;
  logo: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  list5: string;
}
interface headers {
  id: string;
  logo: string;
  na: string;
  button: string;
}
interface list {
  id: string;
  image: { url: string };
  list: string;
}
interface service {
  id: string;
  delay: string;
  classname: string;
  classiocn: string;
  heading: string;
  text: string;
  svg: { url: string }
}
interface footers {
  id: string;
  logo: string;
  info: string;
  info1: string;
  icon: string;
  cname: string;
  link: string;
}
interface portfolio { image: { url: String } }
interface mypicss {

  image: { url: any }
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = main.apiUrl;
  getAllmypicss: any;




  constructor(private http: HttpClient) { }
  getAllProjects() {
    return this.http.get<ProjectsResponse[]>(`${this.apiUrl}/api/pics?populate=*`)
  }
  getAllProjects1() {
    return this.http.get<header[]>(`${this.apiUrl}/api/headers`)
  }
  getAllProjects2() {
    return this.http.get<headers[]>(`${this.apiUrl}/api/misses`)
  }
  listowl() {
    return this.http.get<list[]>(`${this.apiUrl}/api/lists?populate=*`)
  }
  services() {
    return this.http.get<service[]>(`${this.apiUrl}/api/services`)
  }

  footer() {
    return this.http.get<footers[]>(`${this.apiUrl}/api/footers`)
  }
  portfolio() {
    return this.http.get<portfolio[]>(`${this.apiUrl}/api/portfolio2s?populate=*`)
  }

}

