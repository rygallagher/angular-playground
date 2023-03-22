import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "app/services/storage.service";
import { MODE_KEY, COLOR_KEY, DEFAULT_MODE, DEFAULT_COLOR } from "app/utils/constants/storage_keys.constant";
@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    opened = false;

    routes = new Map([
        ['home','Home'],
        ['palette-picker', 'Palette Picker'],
    ]);

    colorConstants = new Map([
        ['blue', 'Blue'],
        ['brown', 'Brown'],
        ['gray', 'Gray'],
        ['green', 'Green'],
        ['orange', 'Orange'],
        ['pink', 'Pink'],
        ['purple', 'Purple'],
        ['red', 'Red'],
        ['yellow', 'Yellow'],
    ]);

    constructor(
        private activatedRoute : ActivatedRoute,
        private storage: StorageService,
        private router: Router,
    ) {}

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
        return this.colorConstants;
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