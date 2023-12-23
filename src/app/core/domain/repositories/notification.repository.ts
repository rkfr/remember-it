import { Observable } from 'rxjs';
import { NotificationModel, NotificationUpdateParams } from '../models';

export abstract class NotificationRepository {
  public abstract getList(): Observable<NotificationModel[]>;
  public abstract createItem(data: NotificationModel): Observable<NotificationModel[]>;
  public abstract updateItem(options: NotificationUpdateParams): Observable<NotificationModel[]>;
  public abstract deleteItem(id: string): Observable<NotificationModel[]>;
}
