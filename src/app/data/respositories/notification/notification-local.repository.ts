import { NotificationRepository } from '../../../core/domain/repositories';
import {BehaviorSubject, map, MonoTypeOperatorFunction, Observable, pipe, take, tap} from 'rxjs';
import { NotificationModel } from '../../../core/domain/models';
import { NotificationLocalStorageHelper } from './notification-local-storage.helper';

export class NotificationLocalRepository extends NotificationRepository {
  private readonly storageHelper: NotificationLocalStorageHelper = new NotificationLocalStorageHelper();
  private readonly listSubject$: BehaviorSubject<NotificationModel[]> = new BehaviorSubject<NotificationModel[]>(this.storageHelper.getList());
  private readonly list$: Observable<NotificationModel[]> = this.listSubject$.asObservable().pipe(
    tap((notificationsList: NotificationModel[]) => {
      this.storageHelper.save(notificationsList);
    }),
  );

  constructor() {
    super();
    console.warn('NotificationLocalRepository instance was created')
  }

  public override getList(): Observable<NotificationModel[]> {
    return this.list$;
  }

  public override createItem(notification: NotificationModel): Observable<NotificationModel[]> {
    return this.list$.pipe(
      map((notificationsList: NotificationModel[]) => ([...notificationsList, notification])),
      this.updateList(),
    )
  }

  public override deleteItem(id: string): Observable<NotificationModel[]> {
    return this.list$.pipe(
      map((notificationsList: NotificationModel[]) => (
        notificationsList.filter((notification: NotificationModel) => notification.id !== id)
      )),
      this.updateList(),
    );
  }

  public override updateItem(params: { id: string, data: Partial<NotificationModel> }): Observable<NotificationModel[]> {
    return this.list$.pipe(
      map((notificationsList: NotificationModel[]) => notificationsList.map(
          (notification: NotificationModel) => (notification.id === params.id)
            ? { ...notification, ...params.data }
            : notification
        ),
      ),
      this.updateList(),
    );
  }

  private updateList(): MonoTypeOperatorFunction<NotificationModel[]> {
    return pipe(
      tap((list: NotificationModel[]) => {
        this.listSubject$.next(list);
      }),
      take(1),
    );
  }
}
