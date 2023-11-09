import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  private cv: string = '../../../assets/cv_juanflorez.pdf';

  constructor( 
    private http: HttpClient
  ) { }

  public downloadCv(): void {
    this.http.get(this.cv, { responseType: 'blob' })
      .subscribe(( res: Blob ) => {
        const url = window.URL.createObjectURL(res);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'cv_juanflorez.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      }
    );
  }
}