import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    selectedArray = [];
    selectArray = [];
    detail = new BehaviorSubject<any>([]);
    detailed = this.detail.asObservable();
    home= new BehaviorSubject<any>(this.selectArray);
    homeSubject= this.home.asObservable();
    listdata = [];
    detailedItem = [];
    
    private jsonURL = 'assets/list.json';
    constructor(private http: HttpClient) {
        // this.getJSON().subscribe(data => {
        //     this.listdata = data;
        // });
    }
    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }

    defaultCategory() {
        this.getJSON().subscribe(data => {
            this.listdata = data;
        });
        this.selectArray = this.listdata.filter(data => {
            return data.Category == "Men";
        })
        return this.selectArray;
    }

    //Fetches selected data from json on clicking one item
    // selectCategory(val ) {
    //     this.selectedArray = this.listdata.filter(data => {
    //         return data.Category == val;
    //     })
        selectCategory(val1, val2) {
            val2 = this.listdata.filter(data => {
                console.log("data",data);
                return data.Category == val1;
            })
            console.log("alert",val2);
            return val2;
        console.log("servicelist",this.selectedArray)
        this.home.next(this.selectedArray);
    }

    //Fetches the data of selected item to be displayed in Detailed description page
    detailedPage(val) {
        this.detailedItem = this.listdata.filter(data => {
            return data.id == val;
        })
        this.detail.next(this.detailedItem);
    }
}
