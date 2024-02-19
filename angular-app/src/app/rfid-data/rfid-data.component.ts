import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../arduino.service';

@Component({
  selector: 'app-rfid-data',
  templateUrl: './rfid-data.component.html',
  styleUrl: './rfid-data.component.scss',
})
export class RfidDataComponent implements OnInit {
  rfidData: any;

  constructor(private rfidService: ArduinoService) {}

  ngOnInit(): void {
    this.rfidService.getRfidData().subscribe((data) => {
      this.rfidData = data;
    });
  }
}
