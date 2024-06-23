import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {

  filteredStatus: string = "";
  appStatus = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve("Stable from promise");
    }, 2000)
  });

  servers: any = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(20, 1, 2018),
      budget: "1000",
      serverLoadingTime: '2.678'
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(25, 1, 2019),
      budget: "2000",
      serverLoadingTime: '2.678'
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(25, 1, 2020),
      budget: "3000",
      serverLoadingTime: '2.678'
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date(15, 1, 2022),
      budget: "500",
      serverLoadingTime: '2.678'
    },
  ];

  getStatusClasses(server: {
    instanceType: string,
    name: string,
    status: string,
    started: Date,
    budget: string,
    serverLoadingTime: string
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    }
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'Test Server',
      status: 'stable',
      started: new Date(15, 1, 2022),
      budget: "2000",
      serverLoadingTime: '2.3'
    })
  }
}
