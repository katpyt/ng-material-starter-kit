import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SlowDataService {

    getName(): Observable<string[]> {
        return of(['Jane', 'Tom', 'Andy']).pipe(
            delay(2000),
            map((names) => {
                if (Math.random() > 0.5) {
                    throw new Error('random error');
                }
                return names;
            })
        );
    }
}
