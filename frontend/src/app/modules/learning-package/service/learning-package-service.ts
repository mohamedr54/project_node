import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {LearningPackageModel} from "../../../models/learning-package.model";
import {CardsModel} from "../../../models/cards.model";

@Injectable({
  providedIn: "root"
})

export class LearningPackageService {
  private apiUrl: string = 'http://localhost:3000'
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
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

  getPackages(): Observable<LearningPackageModel[]> {
    return this.http.get<any>(`${this.apiUrl}/api/package`)
      .pipe(
        map((response: LearningPackageModel[]) => {
          if (response) {
            return response as LearningPackageModel[];
          } else {
            throw new Error('error')
          }
        })
      )
  }

  add(newPackage: LearningPackageModel): Observable<any> {
    return this.http.post<LearningPackageModel>(`${this.apiUrl}/api/package`, newPackage)
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/package/${id}`)
  }

}
