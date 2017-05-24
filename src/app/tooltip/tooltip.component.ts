import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  animations: [
    // Tooltip enters and leaves per https://material.io/guidelines/motion/duration-easing.html
    trigger('tooltip', [
      state('in', style({
        opacity: '0.9',
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: '0',
          transform: 'translateY(-3em)'
        }),
        animate('0.15s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      state('out', style({
        opacity: '0',
        transform: 'translateY(-3em)'
      })),
      transition('* => void', [
        style({
          opacity: '0.9',
          transform: 'translateY(0)'
        }),
        animate('0.15s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class TooltipComponent implements OnInit {

  // Retrieve the tooltip text from component attribute
  @Input() tipText: string;

  // Fill in subscription later?
  constructor() {}

  ngOnInit() {}

}
