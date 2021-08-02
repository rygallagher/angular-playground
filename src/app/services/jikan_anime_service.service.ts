import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JikanAbstractService } from "./abstract_jikan_service.service";

@Injectable({
    providedIn: 'root'
})
export class JikanAnimeService extends JikanAbstractService {

    path = '/anime';
    
    details(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get(pathSegments, queryParameters);
    }

    charactersAndStaff(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'characters_staff'], queryParameters);
    }

    episodes(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'episodes'], queryParameters);
    }

    news(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'news'], queryParameters);
    }

    pictures(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'pictures'], queryParameters);
    }

    videos(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'videos'], queryParameters);
    }

    stats(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'stats'], queryParameters);
    }

    forum(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'forum'], queryParameters);
    }

    moreInfo(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'moreinfo'], queryParameters);
    }

    reviews(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'reviews'], queryParameters);
    }

    recommendations(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'recommendations'], queryParameters);
    }

    userUpdates(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        return this.get([...pathSegments, 'userupdates'], queryParameters);
    }
}