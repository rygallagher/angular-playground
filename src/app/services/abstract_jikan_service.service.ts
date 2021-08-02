import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract_service.service";

@Injectable({
    providedIn: 'root'
})
export abstract class JikanAbstractService extends AbstractService {
    baseUrl = 'https://cors-anywhere.herokuapp.com/api.jikan.moe/v3';
}