import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUniqueDrugs() {
    const url: string = 'https://ddinter-springboot.onrender.com/api/drugs/distinct';

    const httpOptions = {
      headers: {
        timeout: 50000
      }
    }
  
    return this.http.get(url).pipe(
      tap({
        next: (data: any) => console.log(url, data),
        error: (err: any) => console.log(err),
      })
    )
  }
}
