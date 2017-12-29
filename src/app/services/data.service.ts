import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Represents a user service
 * Deals with all api related to user
 * @Class 
 */

@Injectable()
export class DataService {
    constructor(){}

    public optionsForLanguage(){
        let options = [
            'English',
            'Hindi',
            'Arabic',
            'German',
            'Punjabi',
            'Bengali',
            'Burmese',
            'Hebrew'
        ];
        return options;
    }
}
