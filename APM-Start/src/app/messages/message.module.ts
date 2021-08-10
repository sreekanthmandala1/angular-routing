import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
