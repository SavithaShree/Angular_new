import { Injectable } from '@angular/core';
//import { ProductModule } from '../product.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class List{
    private jsonURL = 'assets/list.json';
    constructor(private http: HttpClient) {
       // this.getJSON().subscribe(data => {
         //   console.log(data);
       // });
    }

    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }
}
