import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json"
import * as categories from "./categories.json"

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer="http://190.131.209.106";
  constructor() { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      response=>response.json()
    );


  }

  getCategories(){
    return fetch(`${this.urlServer}/categories`).then(
      response=>response.json()
    );

  }

  getLocalEvents(){
    return dataEvents;
  }

  getCategoriesLocals(){
    return categories;
  }
}
