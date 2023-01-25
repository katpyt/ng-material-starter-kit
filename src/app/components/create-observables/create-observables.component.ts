import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-observables',
  styleUrls: ['./create-observables.component.scss'],
  templateUrl: './create-observables.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateObservablesComponent {

  // data$: Observable<number> = of(1);
  data$: Observable<number> = from([1,2,3,4,5]);

  constructor() {
    // this.data$.subscribe((value) => console.log(value));

    this.data$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('it is finished'),
    });

    setTimeout(
      () => this.data$.subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('it is finished'),
      }),
      2000
    );

  }
}
