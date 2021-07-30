import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    constructor() { }

    signOut(): void {
        window.sessionStorage.clear();
    }

    public removeItem(key: string): void {
        window.sessionStorage.removeItem(key);
    }

    public setItem(key: string, value: string): void {
        window.sessionStorage.setItem(key, value);
    }

    public getItem(key: string): string | null {
        return window.sessionStorage.getItem(key);
    }
}