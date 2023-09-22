import { UseCase } from '../../../base/utils';
import { NotificationModel } from '../../models';
import { NotificationRepository } from '../../repositories';
import { Observable } from 'rxjs';

export class GetNotificationsListUseCase implements UseCase<void, NotificationModel[]> {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {
  }

  public execute(): Observable<NotificationModel[]> {
    return this.notificationRepository.getList();
  }
}
