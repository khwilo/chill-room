import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  private inputValueSource = new BehaviorSubject<string>('');
  currentSearchTerm = this.inputValueSource.asObservable();

  constructor() {}

  updateSearchTerm(value: string) {
    this.inputValueSource.next(value);
  }
}
