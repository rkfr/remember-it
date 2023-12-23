import { Component } from '@angular/core';
import { CreateNotificationItemUseCase, GetNotificationsListUseCase } from '../../../../../core/domain/usecases';

@Component({
  selector: 'ri-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(
    private readonly getAllNotifications: GetNotificationsListUseCase,
    private readonly createNotification: CreateNotificationItemUseCase,
  ) {
  }

  public list$ = this.getAllNotifications.execute();

  public addItem(): void {
    this.createNotification.execute({
      id: `${Date.now()}-#3`,
      duration: 12340,
      body: 'yeaaah hoorey!',
      title: 'I\'ve just created item'
    }).subscribe();
  }
}
