import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecargaComponent } from './recarga/recarga.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ListaRecargasComponent } from './lista-recargas/lista-recargas.component';
import { TotalesComponent } from './totales/totales.component';

@NgModule({
  declarations: [
    AppComponent,
    RecargaComponent,
    VendedorComponent,
    ListaRecargasComponent,
    TotalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
