import {Component, ContentChild, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {MdlTabPanelTitleComponent} from '../tabs/mdl-tab-panel-title.component';


@Component({
  selector: 'mdl-layout-tab-panel',
  template:
      `
    <ng-content *ngIf="titleComponent" select="mdl-tab-panel-content"></ng-content>
    <ng-content *ngIf="!titleComponent"></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MdlLayoutTabPanelComponent {

  @ContentChild(MdlTabPanelTitleComponent, {static: true}) public titleComponent;
  // tslint:disable-next-line:no-input-rename
  @Input('mdl-layout-tab-panel-title') public title;

  @HostBinding('class.mdl-layout__tab-panel') isLayoutTabPanel = true;

  @HostBinding('class.is-active') isActive = false;

}
