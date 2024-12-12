import { Component, EventEmitter, Input, Output } from '@angular/core';
import { multipleOfThousandValidator } from '../../common/validators/multipleOfThousandValidator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperadorService } from '../../common/services/operador.service';
import { Operador } from '../../common/models/operador.interface';
import { Recarga } from '../../common/models/recarga.interface';
import { Vendedor } from '../../common/models/vendedor.interface';
import { RecargaService } from '../../common/services/recarga.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recarga',
  standalone: false,
  templateUrl: './recarga.component.html',
  styleUrl: './recarga.component.scss'
})
export class RecargaComponent {
  @Input() vendedor: Vendedor | null = null;
  @Output() volver = new EventEmitter<any>();

  recargaForm = new FormGroup({
    monto: new FormControl(null, [Validators.required, multipleOfThousandValidator()]),
    numero: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
    operador: new FormControl(-1, [Validators.required, Validators.min(0)]),
    id_usuario: new FormControl(null, [Validators.required, Validators.min(10000000)]),
  });

  operadores: Operador[] = [];

  constructor(
    private operadorService: OperadorService,
    private recargaService: RecargaService,
  ) { }

  ngOnInit() {
    this.operadorService.getOperadores().subscribe(operadores => {
      this.operadores = operadores;
    });
  }

  submitRecarga() {
    if (!this.recargaForm.valid) {
      return;
    }

    const recargaData: Recarga = {
      id_operador: this.recargaForm.value.operador ?? 0,
      monto: this.recargaForm.value.monto ?? 0,
      id_ven: this.vendedor?.id_ven ?? 0,
      id_usuario: this.recargaForm.value.id_usuario ?? 0,
      telefono: this.recargaForm.value.numero ?? 0,
      estado: true,
      fecha: new Date,
    };

    this.recargaService.getUserById(recargaData.id_usuario)
      .subscribe({
        next: (v: any) => {
          if (v && v.id_usuario) {
            this.postRecarga(recargaData);
          } else {
            const user = {
              cedula: recargaData.id_usuario,
            }
            this.recargaService.postUser(user)
              .subscribe({
                next: (u: any) => {
                  // recargaData.id_usuario = u.id_usuario;
                  this.postRecarga(recargaData);
                },
                error: (e: any) => {
                  Swal.fire("No se pudo realizar la recarga");
                },
              });
          }
        },
        error: (e: any) => {
          console.error('Error al realizar la recarga:', e);
          Swal.fire("No se pudo realizar la recarga");
        },
      });

  }

  postRecarga(recargaData: Recarga) {
    this.recargaService.postRecarga(recargaData)
      .subscribe({
        next: (v: any) => {
          console.log('Recarga exitosa:', v);
          Swal.fire("Recarga exitosa");
        },
        error: (e: any) => {
          console.error('Error al realizar la recarga:', e);
          Swal.fire("No se pudo realizar la recarga");
        },
      });
  }

  onVolver() {
    this.volver.emit(true);
  }
}
