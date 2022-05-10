import { DbCellPhones } from "./cellphones";
import { Injectable } from "@angular/core";

@Injectable ({
     providedIn: 'root'
})

export class DbCellPhonesService {
    retriveAll(): DbCellPhones[] {
        return cellphones
    }
}

let cellphones: DbCellPhones[] = [
    {
        nome: 'iphone xr',
        preco: 2800,
        memoriaRam: 8,
        memoriaInterna: 64,
        ano: 2018
    },
    {
        nome: 'iphone xs',
        preco: 3000,
        memoriaRam: 8,
        memoriaInterna: 64,
        ano: 2019
    },
    {
        nome: 'samsung galaxy s10',
        preco: 2600,
        memoriaRam: 12,
        memoriaInterna: 128,
        ano: 2019
    },
    {
        nome: 'samsung galaxy s10+',
        preco: 2800,
        memoriaRam: 12,
        memoriaInterna: 128,
        ano: 2019
    },
    {
        nome: 'iphone 11 pro',
        preco: 5600,
        memoriaRam: 8,
        memoriaInterna: 128,
        ano: 2019
    },
    {
        nome: 'iphone 12',
        preco: 6000,
        memoriaRam: 12,
        memoriaInterna: 256,
        ano: 2021
    },
    {
        nome: 'samsung galaxy s21',
        preco: 5000,
        memoriaRam: 16,
        memoriaInterna: 256,
        ano: 2021
    }
]