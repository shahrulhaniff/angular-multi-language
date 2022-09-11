import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
export function HttpLoaderFactory(httpClient: HttpClient) {  
  return new TranslateHttpLoader(httpClient);  
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {  
          provide: TranslateLoader,  
          useFactory: HttpLoaderFactory,  
          deps: [HttpClient]  
      }  
    })
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //       useFactory: createTranslateLoader, // Exported factory function needed for AoT compilation
    //       deps: [HttpClient]
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
