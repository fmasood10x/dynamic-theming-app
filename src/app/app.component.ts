import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { Theme } from './theme/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-theming-app';
  themeArr: Theme[];
  array: Theme[];

  constructor(
    private themeService: ThemeService,
    private renderer2: Renderer2,
    private route: ActivatedRoute
  ) {
    console.log(window.location.hostname)
    this.themeArr = [Theme.RED, Theme.BLUE, Theme.BLACK];
    this.array = JSON.parse(JSON.stringify(this.themeArr));
    route.queryParams.subscribe(res => {
      let theme = res['theme'];
      let index = this.themeArr.findIndex(x => x == theme);
      if (index < 0)
        return;
      this.array = JSON.parse(JSON.stringify(this.themeArr));
      this.array.splice(index,1);
      this.changeTheme(theme);
    })
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
