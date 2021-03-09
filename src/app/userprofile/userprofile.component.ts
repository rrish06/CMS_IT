import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userProfile: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.userProfile = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      addr1: new FormControl('', Validators.required),
      addr2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    })
  }

  submitForm() {
    console.log(this.userProfile)
  }

}
