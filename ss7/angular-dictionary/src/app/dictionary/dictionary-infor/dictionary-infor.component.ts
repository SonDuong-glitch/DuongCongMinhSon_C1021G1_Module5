import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DictionaryServiceService} from '../../service/dictionary-service.service';
import {Word} from '../../model/word';

@Component({
  selector: 'app-dictionary-infor',
  templateUrl: './dictionary-infor.component.html',
  styleUrls: ['./dictionary-infor.component.css']
})
export class DictionaryInforComponent implements OnInit {
  wordMean: Word;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    const wordId = Number(this.activatedRoute.snapshot.params.id);
    this.wordMean = this.dictionaryService.findById(wordId);
    console.log(this.wordMean.word + ' ' + this.wordMean.mean);
  }

}
