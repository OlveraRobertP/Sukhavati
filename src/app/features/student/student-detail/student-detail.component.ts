import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Student } from 'src/app/core/models/student.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { MessageService } from 'primeng/api';
import { CalendarService } from 'src/app/core/services/calendar.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { SepomexService } from 'src/app/core/services/sepomex.service';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  coloniasPorCp: any;

  es: any;

  genders: SelectItem[];

  mainform: FormGroup;

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  constructor(public translate: TranslateService,
    private routeStateService: RouteStateService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private calendarService: CalendarService,
    private sepomexService: SepomexService) { }

  ngOnInit() {
    let routeState = this.routeStateService.getCurrent();
    this.student = routeState.data || new Student();
    this.es = this.calendarService.getCalendarLabels();

    this.genders = [];
    this.genders.push({ label: this.translate.instant('Select'), value: '' });
    this.genders.push({ label: this.translate.instant('Male'), value: 'Male' });
    this.genders.push({ label: this.translate.instant('Female'), value: 'Female' });

    this.mainform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'birthdate': new FormControl(''),
      'email': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
      'phonenumber': new FormControl(''),
      'mobilenumber': new FormControl(''),
      'rfc': new FormControl(''),
      'zipcode': new FormControl(''),
      'colonia': new FormControl(''),
      'region': new FormControl(''),
      'city': new FormControl(''),
      'address': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });

  }

  loadZipCodeInfo() {
    this.sepomexService.getColoniasByCP(this.student.zipCode).subscribe((data) => {
      this.coloniasPorCp = data;
    });
  }

  loadRegionAndCity(data) {
    this.student.region = data.response.municipio;
    this.student.city = data.response.estado;
  }

  back() {
    this.routeStateService.loadPrevious();
  }

  onSubmit() {
    /// save student    
    this.messageService.add({
      severity: 'success', summary: this.translate.instant('Success'),
      detail: this.translate.instant('Success-Save')
    });

  }



  /////////////////////////////////////
  ///////// CAMARA ////////////////////
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
