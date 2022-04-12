import { Injectable } from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  listWord: Word[] = [
    {
      id: 1,
      word: 'xe may',
      mean: 'bike'
    }, {
      id: 2,
      word: 'o to',
      mean: 'car'
    }, {
      id: 3,
      word: 'xin chao',
      mean: 'hello'
    }, {
      id: 4,
      word: 'xin loi',
      mean: 'sorry'
    }
  ];

  constructor() {
  }

  listAll() {
    return this.listWord;
  }

  findById(meanId: number) {
    for (let word of this.listWord) {
      if (word.id === meanId) {
        return word;
      }
    }
  }

  viewMeaning(meanId: number) {
    for (let word of this.listWord) {
      if (word.id === meanId) {
        return word.mean;
      }
    }
  }
}
