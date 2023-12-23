import { NotificationRepository } from '../../core/domain/repositories';
import { NotificationLocalRepository } from '../../data/respositories';
import {
  CreateNotificationItemUseCase,
  DeleteNotificationItemUseCase,
  GetNotificationsListUseCase,
  UpdateNotificationItemUsCase
} from '../../core/domain/usecases';
import { ClassProvider, FactoryProvider, Provider } from '@angular/core';

const NotificationRepositoryProvider: ClassProvider = {
  provide: NotificationRepository,
  useClass: NotificationLocalRepository,
};

const GetNotificationsListUseCaseProvider: FactoryProvider = {
  provide: GetNotificationsListUseCase,
  deps: [NotificationRepository],
  useFactory: (repository: NotificationRepository) => new GetNotificationsListUseCase(repository),
};

const CreateNotificationItemUseCaseProvider: FactoryProvider = {
  provide: CreateNotificationItemUseCase,
  deps: [NotificationRepository],
  useFactory: (repository: NotificationRepository) => new CreateNotificationItemUseCase(repository),
}

const UpdateNotificationItemUseCaseProvider: FactoryProvider = {
  provide: UpdateNotificationItemUsCase,
  deps: [NotificationRepository],
  useFactory: (repository: NotificationRepository) => new UpdateNotificationItemUsCase(repository),
}

const DeleteNotificationItemUseCaseProvider: FactoryProvider = {
  provide: DeleteNotificationItemUseCase,
  deps: [NotificationRepository],
  useFactory: (repository: NotificationRepository) => new DeleteNotificationItemUseCase(repository),
}

export const NotificationProviders: Provider[] = [
  NotificationRepositoryProvider,
  GetNotificationsListUseCaseProvider,
  CreateNotificationItemUseCaseProvider,
  UpdateNotificationItemUseCaseProvider,
  DeleteNotificationItemUseCaseProvider,
];
