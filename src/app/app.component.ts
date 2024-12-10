import { AfterViewInit, Component, ElementRef, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'car-rentals';

  constructor(private elRef: ElementRef ) {}
  
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = this.elRef.nativeElement.querySelectorAll('.section');
    sections.forEach((section: HTMLElement) => {
      observer.observe(section);
    });
  }
}
