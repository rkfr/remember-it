import { Component } from '@angular/core';
import { GetNotificationsListUseCase } from '../../../../../core/domain/usecases';

@Component({
  selector: 'ri-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(
    private readonly getAllNotificationsUseCase: GetNotificationsListUseCase
  ) {
  }

  public list$ = this.getAllNotificationsUseCase.execute();
}
