import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';
import { Network } from '@ionic-native/network/ngx';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.egrotek.id',
  port: 8084,
  path: '/mqtt',
  username: 'username',
  password: 'password',
  protocol: 'wss',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Network],
  bootstrap: [AppComponent],
})
export class AppModule {}
