import {Component, OnInit} from '@angular/core';
import {NavIndex} from './index'

@Component ({
    selector: 'app-nav',
    templateUrl: 'nav.component.html'
})

export class NavComponent implements OnInit{
    navMenu: NavIndex[] = [
            {
                itemHome: 'Dados',
                gancho: '#dados'
            },
            {
                itemHome: 'Resumo',
                gancho: '#resumo'
            },
            {
                itemHome: 'Formação',
                gancho: '#formacao'
            },
            {
                itemHome: 'Projetos',
                gancho: '#projetos'
            },
            {
                itemHome: 'Conhecimentos',
                gancho: '#conhecimentos'
            },
            {
                itemHome: 'Contatos',
                gancho: '#contatos'
            }
    ]
    ngOnInit(): void {
    }
}