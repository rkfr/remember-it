import { UseCase } from '../../../base/utils';
import { NotificationModel } from '../../models';
import { NotificationRepository } from '../../repositories';
import { Observable } from 'rxjs';

export class DeleteNotificationItemUseCase implements UseCase<string, NotificationModel[]> {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {
  }

  public execute(id: string): Observable<NotificationModel[]> {
    return this.notificationRepository.deleteItem(id);
  }
}
