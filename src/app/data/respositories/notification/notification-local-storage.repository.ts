import { NotificationRepository } from '../../../core/domain/repositories';
import { NotificationRepositoryMapper } from '../../mappers';
import { map, Observable, of } from 'rxjs';
import { NotificationModel } from '../../../core/domain/models';


export class NotificationLocalStorageRepository extends NotificationRepository {
  private readonly notificationMapper: NotificationRepositoryMapper = new NotificationRepositoryMapper();

  public override getList(): Observable<NotificationModel[]> {
    return of([]).pipe(
      map(this.notificationMapper.mapFromList),
    );
  }
}
