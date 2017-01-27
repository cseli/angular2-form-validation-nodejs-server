import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { SpaFormComponent }   from './components/spaForm.component'
import { PostService } from './services/post.service';
;
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, Ng2CompleterModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, SpaFormComponent ],
  providers: [ PostService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
