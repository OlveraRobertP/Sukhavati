import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { CustomMenuItem } from 'src/app/core/models/menu-item.model';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';
import { UserContextService } from 'src/app/core/services/user-context.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    items: CustomMenuItem[];
    selectedItem: string;
    visible: boolean;

    constructor(private routeStateService: RouteStateService,
        private sessionService: SessionService,
        private menuDataService: MenuDataService,
        private applicationStateService: ApplicationStateService,
        private userContextService: UserContextService) { }

    ngOnInit() {

        this.menuDataService.getMenuList(this.userContextService.getUser().userId).subscribe((data) => {
            this.items = data;
            var that = this;
            this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
                if (data && data != null) {
                    that.visible = !that.visible;
                }
            });

            if (this.applicationStateService.getIsMobileResolution()) {
                this.visible = false;
            } else {
                this.visible = true;
            }

            var activeMenu = this.sessionService.getItem("active-menu");
            if (activeMenu) {
                this.selectedItem = activeMenu;
            } else {
                this.selectedItem = "Home";
            }
        });
    }

    ngOnDestroy() {
        this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
    }

    // on menu click event
    onMenuClick(menu: CustomMenuItem) {
        // if child are available then open child
        if (menu.childs != undefined || menu.childs != null) {
            this.toggleSubMenu(menu);
            return;
        }
        if (menu.routerLink == undefined || menu.routerLink == null || menu.routerLink == "") {
            this.routeStateService.add("Error 404", "/error", null, false);
            return;
        }
        this.selectedItem = menu.label;
        this.sessionService.setItem("active-menu", menu.label);
        this.routeStateService.add(menu.label, menu.routerLink, null, true);
        // hide menu bar after menu click for mobile layout        
        setTimeout(() => {
            if (this.applicationStateService.getIsMobileResolution()) {
                this.visible = false;
            }
        }, 100);
    }

    // toggle sub menu on click
    toggleSubMenu(menu: CustomMenuItem) {
        menu.isChildVisible = !menu.isChildVisible;
    }

}
