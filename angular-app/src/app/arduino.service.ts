/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArduinoService {
  constructor(private http: HttpClient) {}

  getRfidData() {
    return this.http.get('http://127.0.0.1:3000/rfid-data');
  }
}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArduinoService {
  constructor(private http: HttpClient) {}

  startRfidScan() {
    return this.http.get('http://127.0.0.1:3000/start-scan');
  }

  getRfidData() {
    return this.http.get('http://127.0.0.1:3000/rfid-data');
  }
}
