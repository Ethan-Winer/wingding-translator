import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  text: string = '';
  styleForTranslator = 'wingdings-container';
  constructor() { }

  ngOnInit(): void {
  }
}
