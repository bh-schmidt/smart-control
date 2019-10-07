import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoardModule
  ],
  providers: [
      AppService
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
