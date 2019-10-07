import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBodyComponent } from './components/modal/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal/modal-footer/modal-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent
  ],
  exports: [
      ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent
  ]
})
export class SharedModule { }
