import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    detail = new BehaviorSubject<any>([]);
    detailed = this.detail.asObservable();
    // home = new BehaviorSubject<any>(this.selectArray);
    // homeSubject = this.home.asObservable();
    productList = [];
    //detailedItem = [];

    private jsonURL = 'assets/list.json';
    constructor(private http: HttpClient) {
    }
    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }

    get listArray() {
        return this.productList;
    }


    //Fetches the data of selected item to be displayed in Detailed description page
    detailedPage(val) {
        console.log("serviceinside", val);
        this.detail.next(val);
    }
}
