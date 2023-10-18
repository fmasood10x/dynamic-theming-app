import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { Theme } from './theme/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-theming-app';
  themeArr: Theme[];

  constructor(
    private themeService: ThemeService,
    private renderer2: Renderer2,
  ) {
    this.themeArr = [Theme.RED, Theme.BLUE, Theme.BLACK];
    console.log('themeArr => ', this.themeArr);
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.themeService.setTheme(Theme.BLACK, this.renderer2);
  }

  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme, this.renderer2);
  }
}
