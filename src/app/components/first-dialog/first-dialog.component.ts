import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-first-dialog',
  styleUrls: ['./first-dialog.component.scss'],
  templateUrl: './first-dialog.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FirstDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {}
}
