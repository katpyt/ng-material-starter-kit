import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-subject-void-in-memory-random-names',
  styleUrls: ['./subject-void-in-memory-random-names.component.scss'],
  templateUrl: './subject-void-in-memory-random-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectVoidInMemoryRandomNamesComponent {
  names$: Observable<string[]> = of(["Kate", "Natally", "Filip", "Martin", "Margaret", "Caroline", "Andrew", "Nicolaus"]);
  
  private _refreshNamesSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public randomNames$: Observable<string[]> = this._refreshNamesSubject
    .asObservable()
    .pipe(
      switchMap(() => this.getRandomNames())
    );

  shuffleArray(data: string[]): any {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

  getRandomNames(): Observable<string[]> {
    return this.names$.pipe(map(data => this.shuffleArray(data)));
  }

  onRefreshButtonClicked(){
    this._refreshNamesSubject.next();
  }
}
