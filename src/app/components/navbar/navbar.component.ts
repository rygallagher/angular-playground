import { Route } from "@angular/compiler/src/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";

const COLOR_KEY = "COLOR";
const MODE_KEY = "MODE";
const DEFAULT_COLOR = "blue";
const DEFAULT_MODE = "light";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    opened = false;

    routes = new Map([
        ['home','Home'],
        ['jikan','Jikan']
    ]);

    ColorConstants = new Map([
        ['blue', 'Blue'],
        ['brown', 'Brown'],
        ['gray', 'Gray'],
        ['green', 'Green'],
        ['orange', 'Orange'],
        ['pink', 'Pink'],
        ['purple', 'Purple'],
        ['red', 'Red'],
        ['yellow', 'Yellow'],
    ])!;

    constructor(
        private activatedRoute : ActivatedRoute,
        private storage: StorageService,
        private router: Router,
    ) {
        // Create route map for the sidenav
        // This way we have a readable button link that routes correctly
        // this.routes = new Map();
        // this.router.config.forEach(route => {
        //     if (route.path !== undefined) {
        //         var routeArray = route.path.split('-');

        //         for (var i = 0; i < routeArray.length; i++) {
        //             routeArray[i] = routeArray[i].charAt(0).toUpperCase() + routeArray[i].slice(1);
        //         }

        //         this.routes.set(route.path, routeArray.join());                
        //     }            
        // });
        // this.routes.delete('');
    }

    ngOnInit(): void {

    }

    get activeTheme(): string {
        const mode = this.storage.getItem(MODE_KEY);
        const color = this.storage.getItem(COLOR_KEY);

        if (mode && color) {
            return `${mode}-theme-${color}`;
        } else if (!mode && color) {
            return `${DEFAULT_MODE}-theme-${color}`;
        } else if (mode && !color) {
            return `${mode}-theme-${DEFAULT_COLOR}`;
        } else {
            return `${DEFAULT_MODE}-theme-${DEFAULT_COLOR}`;
        }
    }
    
    get allColors(): Map<string, string> {
        return this.ColorConstants;
    }

    get activeMode(): string {
        const mode = this.storage.getItem(MODE_KEY);
        return mode ? mode : DEFAULT_MODE;
    }

    get activeColor(): string {
        const color = this.storage.getItem(COLOR_KEY);
        return color ? color : DEFAULT_COLOR;
    }

    setActiveColor(color: string): void {
        this.storage.setItem(COLOR_KEY, `${color}`);
    }

    setMode(): void {
        this.storage.setItem(MODE_KEY, this.activeMode == 'dark' ? 'light' : 'dark');
    }

    toggleSidenav(): void {
        this.opened = !this.opened;
    }
}