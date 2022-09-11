//import { DeclareFunctionStmt } from '@angular/compiler';
import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
//import {TranslateModule, TranslateLoader} from '@ngx-translate/core';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent { 


  constructor(public translate: TranslateService) {  
    translate.addLangs(['en', 'my']);  
    translate.setDefaultLang('en');  
    const browserLang = translate.getBrowserLang();  
    //translate.use(browserLang.match(/en|my/) ? browserLang : 'en');  
  } 


}
/*//export class AppComponent implements OnInit {
  title = 'multiFE';
  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    
    translate.addLangs(['en', 'ms']);
    if (localStorage.getItem('lang')) {  
      const browserLang = localStorage.getItem('lang');  
      translate.use(browserLang.match(/en|ms/) ? browserLang : 'en');  
    } else {  
      localStorage.setItem('lang', 'en');
      translate.setDefaultLang('en');
    }

  }

  // ngOnInit() {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //       return;
  //     }
  //     window.scrollTo(0, 0);
  //   });
  // }

}*/
