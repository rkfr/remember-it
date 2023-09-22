import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { ClassProvider } from '@angular/core';

const IonicRouteStrategyProvider: ClassProvider = {
  provide: RouteReuseStrategy,
  useClass: IonicRouteStrategy
};

export const IonicProviders = [
  IonicRouteStrategyProvider,
];
