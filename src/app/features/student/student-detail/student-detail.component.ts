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
import { StudentService } from 'src/app/core/services/student.service';
import { Sepomex } from 'src/app/core/models/sepomex.model';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  coloniasPorCp: Sepomex[];

  es: any;

  genders: SelectItem[];

  genderSelected: SelectItem;

  mainform: FormGroup;

  // toggle webcam on/off
  public showWebcam = false;
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


  constructor(public translate: TranslateService,
    private routeStateService: RouteStateService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private studentService: StudentService,
    private calendarService: CalendarService,
    private sepomexService: SepomexService) { 

    }

    

    ngOnInit() {
      this.mainform = this.fb.group({
        'name': new FormControl('', Validators.required),
        'lastname': new FormControl('', Validators.required),
        'birthdate': new FormControl(''),
        'email': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
        'phonenumber': new FormControl(''),
        'mobilenumber': new FormControl(''),
        'rfc': new FormControl('',[ Validators.required, Validators.pattern('^([a-zA-Z]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([a-zA-Z0-9]{3}))?$')]),
        'zipcode': new FormControl(''),
        'colonia': new FormControl(''),
        'region': new FormControl(''),
        'city': new FormControl(''),
        'address': new FormControl(''),
        'maritalStatus': new FormControl(''),
        'comments': new FormControl(''),
        'extraComments': new FormControl(''),
        'gender': new FormControl('', Validators.required)
      });      

      this.genders = [];
      this.genders.push({ label: this.translate.instant('Select'), value: '' });
      this.genders.push({ label: this.translate.instant('Male'), value: 'M' });
      this.genders.push({ label: this.translate.instant('Female'), value: 'F' });
    

      let routeState = this.routeStateService.getCurrent();

      if(routeState.data == null){
        this.student = new Student();
        this.student.sepomex = new Sepomex();
      }else{
        let studentSelected = routeState.data.id;
        this.studentService.getStudentById(studentSelected).subscribe((dataStudent) => {         
          this.student = dataStudent || new Student();
          this.es = this.calendarService.getCalendarLabels();                      
          if (this.student.gender == 'M') {
            this.genderSelected = { label: this.translate.instant('Male'), value: 'M' }
          } else if (this.student.gender == 'F') {
            this.genderSelected = { label: this.translate.instant('Female'), value: 'F' }
          }

          if(this.student.sepomex == null){
            this.student.sepomex = new Sepomex();
          }

          this.loadZipCodeInfo();
          
        });
      }      
    }


  loadZipCodeInfo() {    
    this.sepomexService.getColoniasByCP(this.student.sepomex.zipCode).subscribe((data) => {       
      this.coloniasPorCp = data;
    });
  }

  loadRegionAndCity(data) {    
    this.student.sepomex = data;    
  }

  back() {
    this.routeStateService.loadPrevious();
  }

  onSubmit() {
    /// save student   
    this.student.gender = this.genderSelected.value;  
    this.studentService.save(this.student).subscribe(
      data => {        
        this.messageService.add({
          severity: 'success', summary: this.translate.instant('Success'),
          detail: this.translate.instant('Success-Save')
        });      
        this.student.id = data.id;
      },
      error => {
        this.messageService.add({
          severity: 'error', 
          summary: this.translate.instant('Error'),
          detail: error.error
        });
      }
    );
  }




  /////////////////////////////////////
  ///////// CAMARA ////////////////////
  public triggerSnapshot(): void {
    this.toggleWebcam()
    WebcamUtil.getAvailableVideoInputs()
        .then((mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
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
    this.student.photo = webcamImage.imageAsDataUrl;
  }

  public cameraWasSwitched(deviceId: string): void {
    //console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }


  
}
