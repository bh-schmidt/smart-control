import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BoardModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            tapToDismiss: false,
            closeButton: true,
            progressBar:true,
            progressAnimation: 'increasing',
            maxOpened: 4,
            autoDismiss: true
        })
    ],
    providers: [
        AppService
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
