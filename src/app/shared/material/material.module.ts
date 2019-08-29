import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
 MatIconModule,
 MatToolbarModule,
 MatSidenavModule,
 MatButtonModule,
 MatMenuModule
} from '@angular/material';

@NgModule({
 imports: [
  BrowserAnimationsModule,
  MatIconModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule
 ],
 exports: [
  BrowserAnimationsModule,
  MatIconModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule
 ]
})
export class MaterialModule { }
