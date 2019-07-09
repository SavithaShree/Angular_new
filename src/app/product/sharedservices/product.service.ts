import { Injectable } from '@angular/core';
//import { ProductModule } from '../product.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class List {
    detail = new BehaviorSubject<any>('');
    detailed = this.detail.asObservable();
    listdata: any[];
    sortArray: any[];
    // sendItem: any[];
    detailedItem: any[];
    private jsonURL = 'assets/list.json';
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            this.listdata = data;
            console.log(data);
        });
    }


    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }
    sort(val) {
        console.log(this.listdata);
        this.sortArray = this.listdata.filter(data => {
            return data.Category == val.target.value;
        })
        console.log(this.sortArray);
        return this.sortArray;
    }
    // newPage(val){
    //     this.sendItem=this.listdata.filter(data=>{
    //         return data.id == val.target.value;
    //     })
    //     return this.sendItem;
    // }
    detailedPage(val) {
        this.detailedItem = this.listdata.filter(data => {
            return data.id == val;
        })
        this.detail.next(this.detailedItem);

    }
    // RemoveCart(val){

    // }

}
