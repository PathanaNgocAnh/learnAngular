import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Employee } from '../../model/class/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetials: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientSrv= inject(ClientService);
  employeeList: Employee[]=[];
  clientList: Client[]=[];


  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }
}

getAllEmployee(){
  this.clientSrv.getAllEmployee().subscribe((res:APIResponsiveModel)=>{
    this.employeeList = res.date;

  })
}

getAllClient(){
  this.clientSrv.getAllClient().subscribe((res:APIResponsiveModel)=>{
    this.clientList = res.date;

  })

}
