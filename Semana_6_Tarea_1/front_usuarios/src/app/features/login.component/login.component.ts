import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  email = signal('');
  password = signal('');
  mensajeError = signal('');
  cargando = signal(false);
  modoRegistro = signal(false);

  // Registro
  nombreCompleto = signal('');
  confirmarPassword = signal('');

  toggleModo() {
    this.modoRegistro.update((v) => !v);
    this.mensajeError.set('');
  }

  onSubmit() {
    if (this.modoRegistro()) {
      this.registrar();
    } else {
      this.iniciarSesion();
    }
  }

  private iniciarSesion() {
    if (!this.email() || !this.password()) {
      this.mensajeError.set('Todos los campos son obligatorios');
      return;
    }

    this.cargando.set(true);
    this.mensajeError.set('');

    this.authService.login(this.email(), this.password()).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        this.mensajeError.set(
          err.status === 401
            ? 'Credenciales inválidas'
            : 'Error al conectar con el servidor'
        );
        this.cargando.set(false);
      },
    });
  }

  private registrar() {
    if (
      !this.email() ||
      !this.password() ||
      !this.nombreCompleto() ||
      !this.confirmarPassword()
    ) {
      this.mensajeError.set('Todos los campos son obligatorios');
      return;
    }

    if (this.password() !== this.confirmarPassword()) {
      this.mensajeError.set('Las contraseñas no coinciden');
      return;
    }

    this.cargando.set(true);
    this.mensajeError.set('');

    this.authService
      .registro(this.email(), this.password(), this.nombreCompleto())
      .subscribe({
        next: () => {
          const emailRegistro = this.email();
          const passwordRegistro = this.password();
          this.mensajeError.set('');
          this.modoRegistro.set(false);
          this.email.set('');
          this.password.set('');
          // Autologin after register
          this.authService.login(emailRegistro, passwordRegistro).subscribe({
            next: () => this.router.navigate(['/dashboard']),
            error: () => {
              this.mensajeError.set('Registro exitoso, pero falló el inicio automático. Inicia sesión.');
              this.cargando.set(false);
            },
          });
        },
        error: (err: HttpErrorResponse) => {
          this.mensajeError.set(
            err.error?.message || 'Error al registrar usuario'
          );
          this.cargando.set(false);
        },
      });
  }
}
