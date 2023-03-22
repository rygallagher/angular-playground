import { Component } from '@angular/core';
import { StorageService } from 'app/services/storage.service';
import { ACCENT_HEX_KEY, COLOR_KEY, PRIMARY_HEX_KEY } from 'app/utils/constants/storage_keys.constant';

declare var require: any;
var tinycolor = require("tinycolor2");

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Component({
  selector: 'palette-picker',
  templateUrl: './palette-picker.component.html',
  styleUrls: ['./palette-picker.component.scss']
})
export class PalettePickerComponent {
    primaryColor = "2196F3";
    accentColor = "4CAF50";

    primaryColorPalette: Color[] = [];
    accentColorPalette: Color[] = [];

    constructor(
        private storageService: StorageService,
    ) {
        this.savePrimaryColor();
        this.saveAccentColor();
    }

    savePrimaryColor() {
        this.primaryColorPalette = computeColors(`#${this.primaryColor}`);
    
        for (const color of this.primaryColorPalette) {
            const key1 = `--theme-primary-${color.name}`;
            const value1 = color.hex;
            const key2 = `--theme-primary-contrast-${color.name}`;
            const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
            document.documentElement.style.setProperty(key1, value1);
            document.documentElement.style.setProperty(key2, value2);
        }

        this.storageService.setItem(PRIMARY_HEX_KEY, this.primaryColor);
        this.storageService.setItem(COLOR_KEY, 'dynamic');
    }
    
    saveAccentColor() {
        this.accentColorPalette = computeColors(`#${this.accentColor}`);
    
        for (const color of this.accentColorPalette) {
            const key1 = `--theme-accent-${color.name}`;
            const value1 = color.hex;
            const key2 = `--theme-accent-contrast-${color.name}`;
            const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
            document.documentElement.style.setProperty(key1, value1);
            document.documentElement.style.setProperty(key2, value2);
        }

        this.storageService.setItem(ACCENT_HEX_KEY, this.accentColor);
        this.storageService.setItem(COLOR_KEY, 'dynamic');
    }
}

function computeColors(hex: string): Color[] {
    return [
        getColorObject(new tinycolor(hex).lighten(52), '50'),
        getColorObject(new tinycolor(hex).lighten(37), '100'),
        getColorObject(new tinycolor(hex).lighten(26), '200'),
        getColorObject(new tinycolor(hex).lighten(12), '300'),
        getColorObject(new tinycolor(hex).lighten(6), '400'),
        getColorObject(new tinycolor(hex), '500'),
        getColorObject(new tinycolor(hex).darken(6), '600'),
        getColorObject(new tinycolor(hex).darken(12), '700'),
        getColorObject(new tinycolor(hex).darken(18), '800'),
        getColorObject(new tinycolor(hex).darken(24), '900'),
        getColorObject(new tinycolor(hex).lighten(50).saturate(30), 'A100'),
        getColorObject(new tinycolor(hex).lighten(30).saturate(30), 'A200'),
        getColorObject(new tinycolor(hex).lighten(10).saturate(15), 'A400'),
        getColorObject(new tinycolor(hex).lighten(5).saturate(5), 'A700')
    ];
}

function getColorObject(value: any, name: any): Color {
    const c = tinycolor(value);
    return {
        name: name,
        hex: c.toHexString(),
        darkContrast: c.isLight()
    };
}