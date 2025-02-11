import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  gameImg:string=""

  // CardLABEL
  @Input()
  gameLabel:string=''

  // CardPricing
  @Input()
  gameType:string=""
  @Input()
  gamePrice:string=''
}
