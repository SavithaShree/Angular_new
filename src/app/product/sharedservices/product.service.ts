import { Injectable } from '@angular/core';
//import { ProductModule } from '../product.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class List{
    listdata: any[];
    sortArray: any[];
    private jsonURL = 'assets/list.json';
    constructor(private http: HttpClient) {
       this.getJSON().subscribe(data => {
           this.listdata=data;
           console.log(data);
       });
    }
    

    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }
    sort(val){   
       console.log(this.listdata);
      this.sortArray=this.listdata.filter(data => {
        return data.Category == val.target.value ;
      })
      console.log(this.sortArray);
      return this.sortArray;
    }
    
}
