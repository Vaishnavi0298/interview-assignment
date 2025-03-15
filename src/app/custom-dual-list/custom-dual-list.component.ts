import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-custom-dual-list',
  templateUrl: './custom-dual-list.component.html',
  styleUrl: './custom-dual-list.component.scss'
})
export class CustomDualListComponent {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
 //   this.fetchData();
  }

  // fetchData(): void {
  // this.apiService.getData('items')
  // .subscribe(
  // (data) => {
  // console.log('Response:', data);
  // },
  //(error) => {
  //console.error('error', error);
  // }
  // );
  // }
  list = [
    { _id: 1, name: 'Item 1' },
    { _id: 2, name: 'Item 2' },
    { _id: 3, name: 'Item 3' },
    { _id: 4, name: 'Item 4' },
    { _id: 5, name: 'Item 5' }
  ];

  confirmed:any= [];

  destinationChange(event: any) {
    console.log('Items Moved to Target:', event);
    // console.log('Confirmed Array Before:', this.confirmed);
    
    // this.confirmed = [...event];
  
    // console.log('Confirmed Array After:', this.confirmed);
  }
  format = {
    add: 'Add',
    remove: 'Remove',
    all: 'Move All',
    none: 'Remove All',
    direction: 'left-to-right',
    draggable: true,
    locale: 'en'
  };
  // destinationChange(event: any) {
  //   // console.log(event);
  // }

  public compare(a: any, b: any) {
    // console.log(a, b);
  }
}
