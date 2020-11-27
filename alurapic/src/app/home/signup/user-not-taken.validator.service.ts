import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators'

import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class userNotTakenValidatorService {

  constructor(private signupService: SignupService) { }

  checkUserNameTaken() {

    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(500))
        .pipe(switchMap(userName => {
          return this.signupService.checkUserNameTaken(userName)
        }))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first())
    }
  }
}
