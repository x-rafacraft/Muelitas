import { Routes } from '@angular/router';
import { DashboardEstudianteComponent } from './dashboard-estudiante/dashboard-estudiante.component';
import { DashboardDocenteComponent } from './dashboard-docente/dashboard-docente.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component')
      },
    ]
  },
  {
    path: 'dashboard-estudiante',
    component: DashboardEstudianteComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./dashboard-estudiante/home/home.component')
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'cita',
        children :[
          {
            path: 'creacion-cita',
            loadComponent: () => import('./dashboard-estudiante/cita/creacion-cita/creacion-cita.component')
          },
          {
            path: 'lista-cita',
            loadComponent: () => import('./dashboard-estudiante/cita/lista-cita/lista-cita.component')
          },
          {
            path: 'modificar-cita',
            loadComponent: () => import('./dashboard-estudiante/cita/modificar-cita/modificar-cita.component')
          },
        ]
      },
      {
        path: 'mensajeria',
        children :[
          {
            path: 'bandeja-entrada',
            loadComponent: () => import('./dashboard-estudiante/mensajeria/bandeja-entrada/bandeja-entrada.component')
          },
          {
            path: 'enviar-mensaje',
            loadComponent: () => import('./dashboard-estudiante/mensajeria/enviar-mensaje/enviar-mensaje.component')
          },
        ]
      },
    ]
  },
  {
    path: 'dashboard-docente',
    component: DashboardDocenteComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./dashboard-docente/home/home.component')
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'cita',
        children :[
          {
            path: 'creacion-cita',
            loadComponent: () => import('./dashboard-docente/cita/creacion-cita/creacion-cita.component')
          },
          {
            path: 'lista-cita',
            loadComponent: () => import('./dashboard-docente/cita/lista-cita/lista-cita.component')
          },
          {
            path: 'modificar-cita',
            loadComponent: () => import('./dashboard-docente/cita/modificar-cita/modificar-cita.component')
          },
        ]
      },
      {
        path: 'sede',
        children :[
          {
            path: 'creacion-sede',
            loadComponent: () => import('./dashboard-docente/sede/creacion-sede/creacion-sede.component')
          },
          {
            path: 'lista-sede',
            loadComponent: () => import('./dashboard-docente/sede/lista-sede/lista-sede.component')
          },
          {
            path: 'modificar-sede',
            loadComponent: () => import('./dashboard-docente/sede/modificar-sede/modificar-sede.component')
          },
        ]
      },
      {
        path: 'cursos',
        children :[
          {
            path: 'creacion-curso',
            loadComponent: () => import('./dashboard-docente/cursos/creacion-curso/creacion-curso.component')
          },
          {
            path: 'lista-curso',
            loadComponent: () => import('./dashboard-docente/cursos/lista-curso/lista-curso.component')
          },
          {
            path: 'modificar-curso',
            loadComponent: () => import('./dashboard-docente/cursos/modificar-curso/modificar-curso.component')
          },
        ]
      },
      {
        path: 'periodo',
        children :[
          {
            path: 'creacion-periodo',
            loadComponent: () => import('./dashboard-docente/periodo/creacion-periodo/creacion-periodo.component')
          },
          {
            path: 'lista-periodo',
            loadComponent: () => import('./dashboard-docente/periodo/lista-periodo/lista-periodo.component')
          },
          {
            path: 'modificar-periodo',
            loadComponent: () => import('./dashboard-docente/periodo/modificar-periodo/modificar-periodo.component')
          },
        ]
      },
    ]
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./dashboard-admin/home/home.component')
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'usuarios',
        children :[
          {
            path: 'creacion-usuario',
            loadComponent: () => import('./dashboard-admin/usuarios/creacion-usuario/creacion-usuario.component')
          },
          {
            path: 'lista-usuario',
            loadComponent: () => import('./dashboard-admin/usuarios/lista-usuario/lista-usuario.component')
          },
          {
            path: 'modificar-usuario',
            loadComponent: () => import('./dashboard-admin/usuarios/modificar-usuario/modificar-usuario.component')
          },
        ]
      },
      {
        path: 'mensajeria',
        children :[
          {
            path: 'bandeja-entrada',
            loadComponent: () => import('./dashboard-admin/mensajeria/bandeja-entrada/bandeja-entrada.component')
          },
          {
            path: 'enviar-mensaje',
            loadComponent: () => import('./dashboard-admin/mensajeria/enviar-mensaje/enviar-mensaje.component')
          },
        ]
      },

    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
