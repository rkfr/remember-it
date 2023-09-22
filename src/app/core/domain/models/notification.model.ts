export interface NotificationModel {
  id: string;
  title: string;
  body: string;
  duration: number;
}

export interface NotificationUpdateParams {
  id: string,
  data: Partial<NotificationModel>,
}
