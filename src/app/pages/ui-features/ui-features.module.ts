import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ButtonsModule } from './buttons/buttons.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';
import { IconsComponent } from './icons/icons.component';
import { ModalComponent } from './modals/modal/modal.component';
import { TypographyComponent } from './typography/typography.component';
import { TypotarjetaComponent } from './typotarjeta/typotarjeta.component';
import { TabsComponent, Tab1Component, Tab2Component } from './tabs/tabs.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { GridGCComponent } from './gridGC/gridGC.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  ModalsComponent,
  IconsComponent,
  ModalComponent,
  TypographyComponent,
  TypotarjetaComponent,
  TabsComponent,
  Tab1Component,
  Tab2Component,
  SearchComponent,
  GridGCComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class UiFeaturesModule { }
