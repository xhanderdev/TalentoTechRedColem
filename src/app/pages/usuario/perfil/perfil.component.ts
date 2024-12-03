import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  standalone: false,
  
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  profileForm: FormGroup | undefined;
  profileImage: string | ArrayBuffer | null = null;
  profileService: any;

  constructor(
    private fb: FormBuilder,
    private usuarioservicio: UsuarioService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadCurrentProfile();
  }

  initForm() {
    this.profileForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.minLength(8)]],
      direccion: [''],
      fotoPerfil: [''],
      biografia: ['', Validators.maxLength(500)],
      sitioWeb: ['', Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)],
      ciudad: ['']
    });
  }

  loadCurrentProfile() {
    this.perfilservice.getUsuario().subscribe(
      (profile: Profile) => {
        this.profileForm.patchValue(profile);
        if (profile.fotoPerfil) {
          this.profileImage = profile.fotoPerfil;
        }
      },
      error => {
        console.error('Error loading profile', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result;
        this.profileForm.patchValue({ fotoPerfil: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const profileData: Profile = this.profileForm.value;
      
      // Only send password if it's been changed
      if (!profileData.password) {
        delete profileData.password;
      }

      this.profileService.updateProfile(profileData).subscribe(
        response => {
          console.log('Profile updated successfully', response);
          // Optionally show success message or navigate
        },
        error => {
          console.error('Error updating profile', error);
          // Handle error (show error message)
        }
      );
    }
  }
}






