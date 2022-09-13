import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notifications/notification.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  public newNotification() {
    return this.notificationService.getNotification();
  }

}
