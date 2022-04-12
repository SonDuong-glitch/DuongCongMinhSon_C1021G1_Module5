import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../../service/dictionary-service.service';
import {Word} from '../../model/word';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  wordList: Word[] = [];
  constructor(private dictionaryService: DictionaryServiceService) { }
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.wordList = this.dictionaryService.listAll();
  }
}
