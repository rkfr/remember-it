import { UseCase } from '../../../base/utils';
import { NotificationModel, NotificationUpdateParams } from '../../models';
import { NotificationRepository } from '../../repositories';
import { Observable } from 'rxjs';

export class UpdateNotificationItemUsCase implements UseCase<NotificationUpdateParams, NotificationModel[]> {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {
  }

  public execute(params: NotificationUpdateParams): Observable<NotificationModel[]> {
    return this.notificationRepository.updateItem(params);
  }
}
