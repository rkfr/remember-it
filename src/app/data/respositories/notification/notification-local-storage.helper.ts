import { NotificationModel } from '../../../core/domain/models';
import { NotificationEntity } from '../../../core/entities';
import { NotificationRepositoryMapper } from '../../mappers';


export class NotificationLocalStorageHelper {
  private readonly storageKey = 'notificationsList';
  private readonly notificationMapper: NotificationRepositoryMapper = new NotificationRepositoryMapper();

  public getList(): NotificationModel[] {
    const storage = localStorage.getItem(this.storageKey);

    if (!storage) {
      return [];
    }

    const storedList: NotificationEntity[] = JSON.parse(storage);

    return this.notificationMapper.mapFromList(storedList);
  }

  public save(notificationsList: NotificationModel[]): void {
    const notificationsEntities: NotificationEntity[] = this.notificationMapper.mapToList(notificationsList);

    localStorage.setItem(this.storageKey, JSON.stringify(notificationsEntities));
  }
}
