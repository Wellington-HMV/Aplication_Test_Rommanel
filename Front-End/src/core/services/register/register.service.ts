import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { LoginDto } from 'src/core/models/registry/dto\'s/login-dto.model';
import { RegisterViewModel } from 'src/core/models/registry/view-model/register-view-model';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    constructor(private http: HttpClient) {
    }

    geAll(){
        return this.http.get<RegisterViewModel>(`${environment.apiUrl}Register/GetAll`)
    }

    getRegister(value: LoginDto) {
        return this.http.post(`${environment.apiUrl}Register/GetRegistry`, value)
    }

    createRegister(value: RegisterViewModel) {
        return this.http.post(`${environment.apiUrl}Register/Create`, value)
    }

    deleteRegister(value: number){
        return this.http.delete(`${environment.apiUrl}Register/Delete/${value}`)
    }
}