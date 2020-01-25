export class CustomMenuItem {
    label: string;
    icon: string;
    routerLink: string;
    childs: CustomMenuItem[];
    isChildVisible?: boolean;
}