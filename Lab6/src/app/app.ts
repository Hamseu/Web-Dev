import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationPanel } from './navigation-panel/navigation-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Album-App');
}
