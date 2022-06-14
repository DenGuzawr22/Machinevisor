import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MachineComponent } from './pages/machine/machine.component';
import { MachineInfoComponent } from './components/machine-info/machine-info.component';
import { MachineModesComponent } from './components/machine-modes/machine-modes.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MachinePeriodComponent } from './components/machine-period/machine-period.component';
import { MapCardComponent } from './components/map-card/map-card.component';
import { MapComponent } from './components/map/map.component';
import { SwitchOffDialogComponent } from './components/switch-off-dialog/switch-off-dialog.component';
import { OverviewComponent } from './components/overview/overview.component';
import { UserComponent } from './pages/user/user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WeeklyScheduleComponent } from './components/weekly-schedule/weekly-schedule.component';
import { MachineMenuComponent } from './components/machine-menu/machine-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    MachineComponent,
    MachineInfoComponent,
    MachineModesComponent,
    MachinePeriodComponent,
    MapCardComponent,
    MapComponent,
    SwitchOffDialogComponent,
    OverviewComponent,
    UserComponent,
    UserInfoComponent,
    WeeklyScheduleComponent,
    MachineMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
