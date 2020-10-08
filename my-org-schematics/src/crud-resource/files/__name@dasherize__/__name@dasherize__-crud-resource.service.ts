import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const RESOURCE_URL = '<%= url %>';

@Injectable({providedIn: 'root'})
export class <%= classify(name) %>CrudResourceService {
    constructor(private http: HttpClient) { }
    
    findAll(): Observable<<%= classify(name) %>[]> {
        return this.http.get<<%= classify(name) %>[]>(RESOURCE_URL)
    }

    <% if (findOne){ %>
    findOne(id: string): Observable<<%= classify(name) %>> {
        return this.http.get<<%= classify(name) %>>(`${RESOURCE_URL}/${id}`)
    }
    <% } %>
}

export interface <%= classify(name) %> {
    prop: string;
}