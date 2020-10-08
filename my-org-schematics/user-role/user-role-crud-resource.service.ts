import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api/role';

@Injectable({providedIn: 'root'})
export class UserRoleCrudResourceService {
    constructor(private http: HttpClient) { }
    
    findAll(): Observable<UserRole[]> {
        return this.http.get<UserRole[]>(RESOURCE_URL)
    }

    
}

export interface UserRole {
    prop: string;
}