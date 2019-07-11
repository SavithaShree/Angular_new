import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class List {
    detail = new BehaviorSubject<any>('');
    detailed = this.detail.asObservable();
    listdata: any = [];
    selectedArray: any = [];
    private detailedItem: any[];
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

    defaultCategory() {
        this.getJSON().subscribe(data => {
            this.listdata = data;
            console.log(data);
        });
        console.log(this.listdata);
        this.selectedArray = this.listdata.filter(data => {
            return data.Category == "Men";
        })
        console.log(this.selectedArray);
        return this.selectedArray;
    }

    //Fetches selected data from json on clicking one item
    selectCategory(val) {
        console.log(this.listdata);
        this.selectedArray = this.listdata.filter(data => {
            return data.Category == val.target.value;
        })
        console.log(this.selectedArray);
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
