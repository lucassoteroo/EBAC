import { Component, OnInit } from '@angular/core';

// services
import { DbCellPhones } from './db/cellphones';
import { DbCellPhonesService } from './db/cellphones.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit{

  public getPhones: DbCellPhones[] = [] 
  public filterPhonesByPrice: DbCellPhones[] = []

  constructor(private phonesService: DbCellPhonesService) {}
  
  ngOnInit(): void {
    this.getPhones = this.phonesService.retriveAll()
    this.filterByPrice()
  }

  filterByPrice() {
    let totalPhones = this.getPhones
    let element: any = []
    totalPhones.forEach((item) => {
      if (item.preco >= 4000) {
        element.push(item)
      }
    })
    this.filterPhonesByPrice = element
  }
}
