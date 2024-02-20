import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../arduino.service';

@Component({
  selector: 'app-rfid-data',
  templateUrl: './rfid-data.component.html',
  styleUrls: ['./rfid-data.component.scss'],
})
export class RfidDataComponent implements OnInit {
  rfidData: { tag: string; message: string } | undefined;

  constructor(private arduinoService: ArduinoService) {}

  ngOnInit(): void {
    this.loadRfidData();
  }

  loadRfidData() {
    this.arduinoService.getRfidData().subscribe((data) => {
      this.rfidData = data;
    });
  }
}
