import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mockData: any = [{ id: '1', title: 'Buy Milk.', done: false, date: new Date() }, { id: '2', title: 'Meeting with Ali.', done: false, date: new Date() }, { id: '3', title: 'Tea break.', done: false, date: new Date() }, { id: '4', title: 'Go for a run.', done: false, date: new Date() }];
  show: boolean = false; value: string; id: number;
  create(item) {
    this.mockData.push({ id: Date.now(), title: item, done: false, date: new Date() });
  }
  remove(id) { this.mockData = this.mockData.filter(item => { if (item.id !== id) { return item; } }); }

  edit(id, title) 
    { 
      this.show = true; 
      this.value = title; 
      this.id = id; 
    }

    update(title) {
      this.mockData.map(item => {
        if (item.id === this.id) {
          item['title'] = title;
        }
      });
  
      this.show = false;
    }
  

}
