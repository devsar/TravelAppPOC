import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {

  @Output() propagar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  closeForm() {
    this.emitir();
  }

  emitir() {
    this.propagar.emit();
  }

}
