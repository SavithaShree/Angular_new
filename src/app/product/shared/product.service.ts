import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from 'src/app/product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private detailedSubject = new BehaviorSubject<any>([]);
    detailed$ = this.detailedSubject.asObservable();
    productList: Product[] = [];
    private jsonURL = 'assets/list.json';

    constructor(private http: HttpClient) {
    }

    getJSON(): Observable<any> {
        return this.http.get(this.jsonURL).pipe(
            catchError(this.handleError));
    }

    handleError() {
        const errorMessage = 'No products are available currently!';
        window.alert(errorMessage);
        return throwError(errorMessage);

    }

    get listArray() {
        return this.productList;
    }

    routeToDescription(val: object) {
        this.detailedSubject.next(val);
    }

    checkIfAdded(val1: Product[], val2: Product[]) {
        for (const outerloop of val1) {
            for (const innerloop of val2) {
                if (outerloop.id === innerloop.id) {
                    innerloop.isFound = true;
                }
            }
        }
        return val2;
    }
}
