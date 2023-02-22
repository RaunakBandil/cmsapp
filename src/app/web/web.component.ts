
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  projects: any[] = []
  headers: any[] = []
  mis: any[] = []
  list: any[] = []
  service: any[] = []
  port: any[] = []
  footer: any[] = []
  lightbox: any;
  inboundClick = true;
  run = true;
  loader = true;
  open = true;
  preloader: any;
  title: any;
  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any
  i: any;
  show = false;

  constructor(private dataserive: DataService) { }
  onClick(check: number) {

    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else {
      this.tab = 'tab4';
    }

  }
  isMenuScrolled = false;
  isButtonVisible = true;
  sections!: NodeListOf<HTMLElement>;
  navLi!: NodeListOf<HTMLElement>;
  navLii!: NodeListOf<HTMLElement>;
  ngOnInit() {

    this.sections = document.querySelectorAll('section');
    this.navLi = document.querySelectorAll('.nav-menu ul li');
    this.navLii = document.querySelectorAll('.modal-body .nav-menu ul li');
    setTimeout(() => {
      this.loader = false;
    }, 1000);

    this.dataserive.getAllProjects().subscribe(res => {
      this.projects = Object.values(res);
    })
    this.dataserive.getAllProjects1().subscribe(res => {
      this.headers = Object.values(res);
    })
    this.dataserive.getAllProjects2().subscribe(res => {
      this.mis = Object.values(res);
    })
    this.dataserive.listowl().subscribe(res => {
      this.list = Object.values(res);
    })
    this.dataserive.services().subscribe(res => {
      this.service = Object.values(res);
    })
    this.dataserive.portfolio().subscribe(res => {
      this.port = Object.values(res);
    })
    this.dataserive.footer().subscribe(res => {
      this.footer = Object.values(res);
    })


  }
  navfixed: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    var current: any = '';
    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    if (window.pageYOffset > 90)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;


    if (window.pageYOffset > 10)
      this.navfixed = true;
    else
      this.navfixed = false;

    this.navLi.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });
    this.navLii.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });
  }
  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    },

  }






  // open1() {
  //   document.getElementById("my1")!.style.display = "none";
  //   document.getElementById("my2")!.style.display = "block";
  // }
  // open2() {

  //   document.getElementById("my1")!.style.display = "block";
  //   document.getElementById("my2")!.style.display = "none";

  // }
}
