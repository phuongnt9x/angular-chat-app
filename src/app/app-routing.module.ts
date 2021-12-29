import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {ChatComponent} from "./chat/chat.component";
import {GroupListComponent} from "./group-list/group-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'group',
    pathMatch: 'full'
  }, {
    path: 'group/:id',
    component: UserComponent
  }, {
    path: 'chat/:id',
    component: ChatComponent
  }, {
    path: 'group',
    component: GroupListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
