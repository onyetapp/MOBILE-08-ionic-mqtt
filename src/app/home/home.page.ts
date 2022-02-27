/* eslint-disable max-len */
import { Component } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logs: string[] = [];

  constructor(
    private mqttService: MqttService,
    public common: CommonService
  ) {
    this.initMqtt();
  }

  initMqtt() {
    this.mqttService.observe('jiot/55dlUQ4l88vSD7fihwnU/projects/ma80JbO0WE61QXhKEswA/apps/PRiI3TzpStDdNGYvbXgf').subscribe((message: IMqttMessage) => {
      this.logs.push(message.payload.toString());
    }, (err) => {
      this.logs.push(JSON.stringify(err));
    });
    this.mqttService.onClose.subscribe(() => {
      this.logs.push('mqtt closed');
    });
    this.mqttService.onError.subscribe((err) => {
      this.common.isOnline = false;
      this.logs.push('mqtt error', JSON.stringify(err));
    });
    this.mqttService.onConnect.subscribe(() => {
      this.logs.push('mqtt connected');
      this.common.isOnline = true;
    }, (err) => {
      this.logs.push(JSON.stringify(err));
    });
  }

}
