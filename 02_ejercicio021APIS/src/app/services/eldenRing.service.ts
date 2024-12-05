import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResultEldenRing, ApiResultOneEldenRing, EldenRing} from "../common/eldenRingInterfaz";

@Injectable({
  providedIn: 'root'
})
export class EldenRingService {
  private URI: string = "https://eldenring.fanapis.com/api/bosses";

  constructor(private http: HttpClient) {
  }

  getBosses(): Observable<ApiResultEldenRing> {
    return this.http.get<ApiResultEldenRing>(this.URI);
  }

  getBoss(id: string): Observable<EldenRing> {
    return this.http.get<ApiResultOneEldenRing>(this.URI+'/'+id).pipe(
      map(info => info.data)
    )
  }

  getBossesPagination(limit: number, page: number): Observable<ApiResultEldenRing> {
    return this.http.get<ApiResultEldenRing>(this.URI +'?limit='+limit+'&page='+page);
  }
}
