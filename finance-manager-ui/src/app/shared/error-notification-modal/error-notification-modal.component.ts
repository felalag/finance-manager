import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-error-notification-modal',
  templateUrl: './error-notification-modal.component.html',
  styleUrls: ['./error-notification-modal.component.scss']
})
export class ErrorNotificationModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) { }

  ngOnInit(): void {
  }

}
