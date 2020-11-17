import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

const API = 'http://localhost:3000'


// injetamos o PhotoService em nosso componente
@Injectable({
  // isso significa que estamos criando no scopo raiz, qualquer componente podera utiliza-lo
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {

    return this.http
      .get<Photo[]>(`${API}/${userName}/photos`)
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString())

    return this.http
      .get<Photo[]>(`${API}/${userName}/photos`, { params: params })
  }
}
