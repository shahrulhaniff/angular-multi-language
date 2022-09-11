import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiFE';

  constructor(public translate: TranslateService) {  
    translate.addLangs(['en', 'my']);  
    translate.setDefaultLang('en');  
    const browserLang = translate.getBrowserLang();  
    //translate.use(browserLang.match(/en|my/) ? browserLang : 'en');  
}
}
