import { UseCase } from '../../../base/utils';
import { NotificationModel } from '../../models';
import { NotificationRepository } from '../../repositories';
import { Observable } from 'rxjs';

export class CreateNotificationItemUseCase implements UseCase<NotificationModel, NotificationModel[]> {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {
  }

  public execute(data: NotificationModel): Observable<NotificationModel[]> {
    return this.notificationRepository.createItem(data);
  }
}
