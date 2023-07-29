import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-inner-content',
  templateUrl: './inner-content.component.html',
  styleUrls: ['./inner-content.component.scss']
})
export class InnerContentComponent {
  @Input() content: string = '';
}

