import { Observable } from 'rxjs';
import { NotificationModel } from '../models';

export abstract class NotificationRepository {
  public abstract getList(): Observable<NotificationModel[]>;
}
