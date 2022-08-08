import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterApiResponse} from "../models/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>('https://rickandmortyapi.com/api/character')
  }
}
