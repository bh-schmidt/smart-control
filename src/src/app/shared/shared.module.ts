import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBodyComponent } from './components/modal/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal/modal-footer/modal-footer.component';
import { StopPropagationClickDirective } from './directives/stop-propagation-click/stop-propagation-click.directive';
import { StopPropagationMouseupDirective } from './directives/stop-propagation-mouseup/stop-propagation-mouseup.directive';
import { StopPropagationMousedownDirective } from './directives/stop-propagation-mousedown/stop-propagation-mousedown.directive';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent,
      StopPropagationClickDirective,
      StopPropagationMousedownDirective,
      StopPropagationMouseupDirective
   ],
   exports: [
      ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent,
      StopPropagationClickDirective,
      StopPropagationMousedownDirective,
      StopPropagationMouseupDirective
   ]
})
export class SharedModule { }
