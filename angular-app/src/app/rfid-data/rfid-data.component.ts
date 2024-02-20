import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../arduino.service';

@Component({
  selector: 'app-rfid-data',
  templateUrl: './rfid-data.component.html',
  styleUrls: ['./rfid-data.component.scss'],
})
export class RfidDataComponent implements OnInit {
  rfidData: any;
  scanning: boolean = false;
  scanSuccess: boolean = false;

  constructor(private rfidService: ArduinoService) {}

  ngOnInit(): void {}

  startScan(): void {
    this.scanning = true;

    // Start RFID scan
    this.rfidService.startRfidScan().subscribe(
      (response: any) => {
        console.log('Scan initiated:', response);

        // Wait for a short time to give the Arduino time to perform the scan
        setTimeout(() => {
          // Fetch RFID data after the scan
          this.rfidService.getRfidData().subscribe(
            (data: any) => {
              console.log('Received RFID data:', data);
              this.rfidData = data.tag; // Update to the correct property name
              this.scanSuccess = true;
              this.scanning = false;
            },
            (error) => {
              console.error('Error fetching RFID data:', error);
              this.scanning = false;
            }
          );
        }, 5000); // Adjust the delay time as needed
      },
      (error) => {
        console.error('Error initiating scan:', error);
        this.scanning = false;
      }
    );
  }
}
