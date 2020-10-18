import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CheckboxComponent implements OnInit {
  // @Input() public name: string;

  @Input() public checked: boolean;
  @Output() public checkedChange: EventEmitter<boolean>;

  public constructor() {
    // this.name = '';
    this.checked = false;
    this.checkedChange = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {}

  public checkboxClicked(event: MouseEvent) {
    event.preventDefault();

    this.checkedChange.emit(!this.checked);
  }
}
