import {environment} from "@ng-bootstrap/ng-bootstrap/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {CardsModel} from "../../../models/cards.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})

export class CardsService {
  private apiUrl: string = 'http://localhost:3000'
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.http = http;
    this.headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json');

  }


  getFacts(): Observable<CardsModel[]> {
    return this.http.get<any>(`${this.apiUrl}/api/fact`)
      .pipe(
        map((response: CardsModel[]) => {
          if (response) {
            return response as CardsModel[];
          } else {
            throw new Error('error')
          }
        })
      )
  }

  add(flashCard: CardsModel): Observable<any> {
    return this.http.post<CardsModel>(`${this.apiUrl}/api/fact`, flashCard)
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/fact/${id}`)
  }
}
