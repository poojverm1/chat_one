import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ChattingModule } from './chatting/chatting.module';
import { UserModule } from './user/user.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent
   
    
  ],
  imports: [
    BrowserModule,
    ChattingModule,
   UserModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent,pathMatch:'full'},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'*',component:LoginComponent}
    ])
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
