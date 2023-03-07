import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoUrl: any;

  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.isScrolling);
    this.logoUrl = this.sanitizer.bypassSecurityTrustUrl('assets/logo.png');
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.isScrolling);
  }

  isScrolling(): void {
    const headerE1 = document.querySelector('.primary-header') as HTMLElement | null;
    let windowPosition = window.scrollY < 250;
    headerE1?.classList.toggle('active', windowPosition);
  }

}
