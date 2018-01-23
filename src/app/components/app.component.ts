import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {phoneValidator} from '../validators/phone.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'my-phone': new FormControl('', phoneValidator)
    });
  }
}
