import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meow = "meow mewo nigga";
  //setup language
  selectedLang = {
    name: "MY",
    image: "assets/images/flags/MALAYSIA.jpg"
  };


  constructor(
    public translate: TranslateService
  ) {

     translate.addLangs(['en', 'ms']);
      if (localStorage.getItem('lang')) {
        const browserLang = localStorage.getItem('lang');  
        //translate.use(browserLang.match(/en|ms/) ? browserLang : 'ms');
        if (localStorage.getItem('lang') === "ms") {
          this.selectedLang = {
            name: "MY",
            image: "assets/images/flags/MALAYSIA.jpg"
          };
        } else {
          this.selectedLang = {
            name: "EN",
            image: "assets/images/flags/ENGLISH.jpg"
          };
        }
      } else {  
        localStorage.setItem('lang', 'ms');
        translate.setDefaultLang('ms');
        this.selectedLang = {
          name: "MY",
          image: "assets/images/flags/MALAYSIA.jpg"
        };
      } 

   }

  ngOnInit() {
  }

  // changeLang(language: string) {  
  //   localStorage.setItem('lang', language);  
  //   this.translate.use(language);  
  // }
}
