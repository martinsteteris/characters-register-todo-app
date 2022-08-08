import { Component, OnInit } from '@angular/core';
import {CharactersService} from "../../shared/services/characters.service";
import {Character, CharacterPages} from "../../shared/models/character.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-charactres',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  charactersSubscription? : Subscription;
  pagination?: CharacterPages;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((response)=> {
      console.log(response);
    // @ts-ignore
      this.characters = response.results;
      this.pagination = response.info;
    })
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }

}
