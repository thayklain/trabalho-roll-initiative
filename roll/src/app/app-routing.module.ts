import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'turn',
    loadChildren: () => import('./turn/turn.module').then( m => m.TurnPageModule)
  },
  {
    path: 'addchar',
    loadChildren: () => import('./addchar/addchar.module').then( m => m.AddcharPageModule)
  },
  {
    path: 'removechar',
    loadChildren: () => import('./removechar/removechar.module').then( m => m.RemovecharPageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
