import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { User } from 'src/app/core/models/user.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  locale: string;

  version: string;

  msgs: any[];

  user: User;

  blockedPanel: boolean = false;

  constructor(
    private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService
  ) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
    this.locale = this.sessionService.getItem("sukhavati-language");
    this.version = environment.version;
    //this.msgs = [{ severity: 'info', detail: 'UserName: admin' }, { severity: 'info', detail: 'Password: password' }];
  }

  onClickLogin() {
    this.blockedPanel = true;
    this.userService.getUserByUserNameAndPassword(this.userName, this.password)
      .subscribe((data) => {
        this.user = data;
        this.blockedPanel = false;
        if (this.user.id) {
          this.userContextService.setUser(this.user);
          this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
          return;
        }
        this.toastService.addSingle('error', '',this.translate.instant('Login-fail'));
        return;
      });

  }

  onLanguageChange($event) {
    this.locale = $event.target.value;
    if (this.locale == undefined || this.locale == null || this.locale.length == 0) {
      this.locale = "es";
    }
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.locale);
    this.sessionService.setItem("sukhavati-language", this.locale);
  }

}
