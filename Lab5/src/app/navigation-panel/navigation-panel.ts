import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation-panel',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-panel.html',
  styleUrl: './navigation-panel.css',
})
export class NavigationPanel {

}
