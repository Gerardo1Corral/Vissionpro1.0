import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tablero / Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
/*  {
    title: 'MENÚ PRINCIPAL',
    icon: 'nb-keypad',
    group: true,
  },
    <a href='/auth/login'> <span class="fa fa-low-vision icon-menu"></span> Acceso Principal </a>
*/  

  {
    title: 'Comunidad',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Datos de la Comunidad',
        link: '/pages/forms/dcomunidad',  
      },
      {
        title: 'Factores de Prorrateo',
        link: '/pages/tables/smart-prorrat',
      },
      {
        title: 'Co-Propietario',
        link: '/pages/tables/smart-copropietario',
    /*  link: '/pages/tables/smart-xxxxx',    TABLA INTELIGENTE */
      },
      {
        title: 'Estacionamientos',
        link: '/pages/tables/smart-estacionamientos', 
      },
      {
        title: 'Bodegas',
        link: '/pages/tables/smart-bodegas', 
      },
    ],
  },

  {
    title: 'Banco',
    icon: 'nb-compose',
    children: [
      {
        title: 'Conciliación Bancaria',
        link: '/pages/tables/smart-conciliacion',
      },
      {
        title: 'Ingresos',
        link: '/pages/tables/smart-ingresosGC', 
      },
      {
        title: 'Egresos',
        link: '/pages/tables/smart-egresosGC',
      },
      {
        title: 'Cargos y Multas',
        link: '/pages/tables/smart-cargosymultas',  
      },
      {
        title: 'Provisiones',
         link: '/pages/tables/smart-provisiones', 
      },
      {
        title: 'Fondo de Reserva',
        link: '/pages/tables/smart-fondoreserva',  
      }, 
    ],
  },
  {
    title: 'Gastos Comunes',
    icon: 'nb-gear',
    children: [
      {
        title: 'GASTOS COMUNES',
        link: '/pages/tables/smart-gastocomun', 
   /*     link: '/pages/ui-features/gridGC', */ 
      }, 
      {
        title: 'Boleta GC Detallado',
        link: '#',
      }, {
        title: 'Boleta GC Agrupado',
        link: '#',
      },
    {
        title: 'Generar Cartas de Corte',
        link: '/pages/tables/smart-cartasdecorte',
      },      
    ],
  },
  {
    title: 'Espacios Comunes',
    icon: 'nb-location',
    children: [
      {
        title: 'Arriendos',
        link: '#',
      },
      {
        title: 'Autorización',
        link: '#',
      },
      {
        title: 'Registro de Visitas',
        link: '/pages/forms/inputs',      /* FORMULARIO DE ENTRADA */
      },
      {
        title: 'Registro de Encomiendas',
        link: '/pages/forms/inputs',      /* FORMULARIO DE ENTRADA */
      },
      {
        title: 'Registro de Cámaras',
        link: '#',
      },
      {
        title: 'Libro de Novedades',
        link: '/pages/forms/inputs',     /* FORMULARIO DE ENTRADA */
      },
    ],
  },
  {
    title: 'Gestión de la Inf.',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Proyectos',
        link: '/pages/tables/smart-gantt',
      },
      {
        title: 'Centro de Costo',
        link: '/pages/tables/smart-centrodecosto',
      },
      {
        title: 'Gráficos de Ingresos',
        link: '/pages/charts/Graf-Pie',
      },
      {
        title: 'Gráficos de Gastos',
        link: '/pages/charts/chartjs-Gastos',
      },
      {
        title: 'Gráfico XAXIS',
        link: '/pages/charts/ctacteing',
/*        link: '/pages/charts/xxxxxxx',   */
      },
    ],
  },
  {
    title: 'Remuneraciones',
    icon: 'nb-title',
    children: [
      {
        title: 'Datos de Empleados',
        link: '/pages/tables/smart-datosempleados',  
      },
      {
        title: 'Datos Liquidaciones',
        link: '/pages/tables/smart-datosliquidaciones',  
      },
/*      {
        title: 'Control de Ingreso',
        link: '#',
      },
      {
        title: 'Parámetros del Mes',
        link: '#',
      },
      {
        title: 'Archivos Previred',
        link: '#',
      }, */
    ], 
  },

  {
    title: 'Configuración',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Usuarios del Sistema',
        link: '/pages/tables/smart-usuarios', 
      },
      {
        title: 'Administrar Permisos',
        link: '/pages/forms/permisos',
      },
      {
        title: 'Asignación de tareas',
        link: '/pages/forms/inputs',    /* FORMULARIO DE ENTRADA */
      },
      {
        title: 'Publicaciones',
        link: '/pages/forms/inputs',    /* FORMULARIO DE ENTRADA */
      },
    ],
  },

  /*  
  {
    title: 'Tablas de Ejemplos1',
    icon: 'nb-tables',
    children: [
        {
        title: 'TIPOS DE TEXTOS',
        link: '/pages/ui-features/typography', 
        },
        {
        title: 'TIPOS DE BOTONES',
        link: '/pages/ui-features/buttons',  
        },
        {
        title: 'TIPOS DE GRILLAS',
        link: '/pages/ui-features/grid',   
        },
        {
        title: 'TIPOS DE ICONOS',
        link: '/pages/ui-features/icons',  
        },
        {
        title: 'MSJ EN PANTALLA',
        link: '/pages/ui-features/modals', 
        },
        {
        title: 'CONTENEDORES MSJ',
        link: '/pages/ui-features/tabs',  
        },
        {
        title: 'FORMATOS BQUEDA',
        link: '/pages/ui-features/search-fields', 
        },
      ],
    },
    {
      title: 'Tablas de Ejemplos2',
      icon: 'nb-tables',
      children: [
        {
        title: 'TABLA INTELIGENTE',
        link: '/pages/tables/smart-table', 
        },
        {
        title: 'FORMULARIOS',
        link: '/pages/forms/layouts', 
        },
        {
        title: 'FORMULARIOS ENTRADA',
        link: '/pages/forms/inputs',  
        },
        {
        title: 'ARBOL',
        link: '/pages/components/tree', 
        },
        {
        title: 'TOSTADORA',
        link: '/pages/components/notifications', 

        },

      ],
    },
    {
      title: 'Tablas de Ejemplos3',
      icon: 'nb-tables',
      children: [
        {
        title: 'GOOGLE MAPS',
        link: '/pages/maps/gmaps', 
        },
        {
        title: 'FOLLETO MAPAS',
        link: '/pages/maps/leaflet', 
        },
        {
        title: 'MAPA DE POBLACION',
        link: '/pages/maps/bubble', 
        },
        {
        title: 'GRAFICOS 1',
        link: '/pages/charts/echarts', 
        },
        {
        title: 'GRAFICOS 2',
        link: '/pages/charts/chartjs', 
        },
        {
        title: 'GRAFICOS 3',
        link: '/pages/charts/d3', 
        },
        {
        title: 'EDITOR DE TEXTO 2', 
        link: '/pages/editors/tinymce',
        },
    ],
  },

  {
  
    title: 'Mi Cuenta de Acceso',
    icon: 'nb-locked',
    children: [
      {
        title: 'Acceso Principal',
        link: '/auth/login',
      },
      {
        title: 'Registrarse',
        link: '/auth/register',
      },
      {
        title: 'Recuperar Password',
        link: '/auth/request-password',
      },
      {
        title: 'Cambiar Password',
        link: '/auth/reset-password',
      },
    ],
  },


*/


];
