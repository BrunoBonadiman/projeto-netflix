import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  Profile  from '../model/new-profile.model';

@Injectable({
  providedIn: 'root'
})

export class NewProfileService {

  UserProfile: Profile = {
    nome: '',
    crianca: false,
    urlImagem: '../../assets/img/comum-red.png'
  };

  uri = 'http://localhost:3000/api/profile';
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) { }

  adicionarPerfil(perfil: Profile) {
    return this
      .http
      .post(`${this.uri}/perfis`, perfil, this.noAuthHeader);
  }

  getPerfis() {
        return this
          .http
          .get(`${this.uri}/perfis`);
  }
}
