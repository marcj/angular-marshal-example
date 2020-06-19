import 'reflect-metadata';
import { Component } from '@angular/core';
import {f, plainToClass} from "@marcj/marshal";

class Item {
  @f title: string;
}

class Model {
  @f.array(Item) items: Item[] = [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-marshal-example';

  model = plainToClass(Model, {
    items: [{title: 'First'}, {title: 'Second'}, {title: 'Third'}]
  })

  isItemInstance(item: Item) {
    return item instanceof Item;
  }
}
