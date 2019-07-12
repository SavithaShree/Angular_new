import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class List {
    detail = new BehaviorSubject<any>([]);
    detailed = this.detail.asObservable();
    listdata: any = [];
    selectedArray: any = [];
    detailedItem: any[];
    private jsonURL = 'assets/list.json';
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            this.listdata = data;
        });
    }
    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }

    defaultCategory() {
        this.getJSON().subscribe(data => {
            this.listdata = data;
        });
        this.selectedArray = this.listdata.filter(data => {
            return data.Category == "Men";
        })
        return this.selectedArray;
    }

    //Fetches selected data from json on clicking one item
    selectCategory(val) {
        this.selectedArray = this.listdata.filter(data => {
            return data.Category == val.target.value;
        })
        return this.selectedArray;
    }

    //Fetches the data of selected item to be displayed in Detailed description page
    detailedPage(val) {
        this.detailedItem = this.listdata.filter(data => {
            return data.id == val;
        })
        this.detail.next(this.detailedItem);
    }

}
