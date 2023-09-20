import { Mapper } from '../../core/base/utils';
import { NotificationEntity } from '../../core/entities';
import { NotificationModel } from '../../core/domain/models';

export class NotificationRepositoryMapper extends Mapper<NotificationEntity, NotificationModel> {
  public mapFrom(param: NotificationEntity): NotificationModel {
    return {
      id: param.id,
      title: param.title,
      body: param.body,
      duration: param.duration,
    };
  }

  public mapTo(param: NotificationModel): NotificationEntity {
    return {
      id: param.id,
      title: param.title,
      body: param.body,
      duration: param.duration,
    };
  }

  public mapFromList(param: NotificationEntity[]): NotificationModel[] {
    return param.map(this.mapFrom);
  }

  public mapToList(param: NotificationModel[]): NotificationEntity[] {
    return param.map(this.mapTo);
  }
}
