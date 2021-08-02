import { Injectable } from "@angular/core";
import { JikanAbstractService } from "./abstract_jikan_service.service";

@Injectable({
    providedIn: 'root'
})
export class JikanTopService extends JikanAbstractService {
    path = '/top';
}