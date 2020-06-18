import  Profile  from '../model/new-profile.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs-compat/Rx';
import 'rxjs-compat/operator/map';
import { Observable } from 'rxjs-compat';

@Injectable()
export class NewProfileService {
  private newProfileService: Profile[] = [];
  // messageIsEdit = new EventEmitter<any>();

  UserProfile: Profile= {
    nome: '',
    crianca: false,
    urlImagem: '',
    usuarioId: ''
  };

  constructor(private http: Http) {}

  addProfile(profile: Profile) {
    const bodyReq = JSON.stringify(profile);
    const myHeaders = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.post(environment.apiBaseUrlNewProfile + '/create', bodyReq, {
        headers: myHeaders,
      })
      .map((responseRecebida: Response) => {
        var aux = responseRecebida.json();
        const newObjMessage = new Profile();
        this.newProfileService.push(newObjMessage);
        return newObjMessage;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido)
      );
  }

  getProfiles() {
    // const myHeaders = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get(environment.apiBaseUrlNewProfile + '/getProfile');
    //   .map((resposeRecebida: Response) => {
    //     const responseEmJson = resposeRecebida.json();
    //     const messageSResponseRecebida = responseEmJson.objsMessageSRecuperados;
    //     let transformedCastMassagesModelFrontEnd: Profile[] = [];

    //     for (let perfil of messageSResponseRecebida) {
    //       transformedCastMassagesModelFrontEnd.push(
    //         new Profile()
    //       );
    //     }

    //     this.newProfileService = transformedCastMassagesModelFrontEnd;
    //     return transformedCastMassagesModelFrontEnd;
    //   })
    //   .catch((erroRecebido: Response) => Observable.throw(erroRecebido));
     }
  }
