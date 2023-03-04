import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { BeerService } from '../../services/beer.service';
import { BeerModel } from '../../models/beer.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-subject-pagination-be-beers',
  styleUrls: ['./subject-pagination-be-beers.component.scss'],
  templateUrl: './subject-pagination-be-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectPaginationBeBeersComponent {

  constructor(private _beerService: BeerService) {
  }

  readonly initialPagination: PageEvent = {
    pageIndex: 1,
    pageSize: 5,
    length: 100,
  };

  private _paginationSubject: BehaviorSubject<PageEvent> = new BehaviorSubject<PageEvent>(this.initialPagination);
  public pagination$: Observable<PageEvent> = this._paginationSubject
    .asObservable()
    .pipe(shareReplay(1));

  public beerList$: Observable<BeerModel[]> = this.pagination$
    .pipe(
      switchMap(
        (pagination: PageEvent) => {
          return this._beerService.getAllBeersWithPagination(pagination.pageIndex, pagination.pageSize)
        }
      )
    );

  onPageSizeAndOageIndexChanged(event: PageEvent) {

    // console.log(event);

    this._paginationSubject.next(
      {
        ...this._paginationSubject.getValue(),
        pageIndex: event.pageIndex + 1,
        pageSize: event.pageSize

      }
    );
  }
}
