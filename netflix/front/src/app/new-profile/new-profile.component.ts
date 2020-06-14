import { Component } from '@angular/core';
import { NewProfileService } from './service/new-profile.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css'],
})
export class NewProfileComponent {

  constructor(public newProfileService: NewProfileService, private router: Router){}

  onSubmit(form: NgForm) {
    this.newProfileService.adicionarPerfil(form.value).subscribe(
      (res) => {
        swal.fire('Sucesso!', 'Usuário cadastrado com sucesso!', 'success');
        this.resetForm(form);
      },
      (err) => {
        if (err.status === 422) {
          swal.fire('Ops!', 'Ocorreu um erro inesperado!', 'error');
        } else
        swal.fire('Ops!', 'Ocorreu um problema. Entre em contato com o administrador.', 'error');
      }
    );
  }

  resetForm(form: NgForm) {
    this.newProfileService.UserProfile = {
      nome: '',
      crianca: false,
      urlImagem: ''
    };
    form.resetForm();
  }

  voltar(){
    this.router.navigateByUrl('/userprofile');
  }
}
