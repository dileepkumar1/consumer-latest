import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  items = [
    {
      title: 'Classification',
      icon: 'person-outline',
      link: ['/home/classification'],
    },
    {
      title: 'Monitoring',
      icon: 'monitor',
      link: [],
      expanded: false,
      children: [
        {
          title: 'Performance',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Precession ',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Recall ',
          link: [],
        },
        {
          title: 'Class wise insight',
          link: [],
        },
      ],
    },
    {
      title: 'Configuration',
      link: [],
      icon: 'shuffle-2',
      children: [
        {
          title: 'Classification ',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Sub-classification ',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Templates',
          link: [],
        },
      ],
    },
    {
      title: 'User Managment',
      link: [],
      icon: 'people',
    },
  ];
  
  ngOnInit() {
  }

}
