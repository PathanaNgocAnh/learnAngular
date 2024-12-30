import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);

  // constructor(private htpp: HttpClient){

  // }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .subscribe((res: APIResponseModel) => {
        this.roleList = res.data;
      });
  }

  //   firstName: string = "Angular Tutorial";
  //   angularVersion = "Version 17";

  //   version: number = 17;

  //   isActive: boolean = false;

  //   currentDate : Date = new Date();

  //   // inputType: string = "radio";
  //   // inputType: string = "checkbox";
  //   inputType: string = "button";
  //   selectedState: string = '';

  // showWelcomeAlert(){
  // alert("Welcom to Angular 18 Tutorial")
  // }

  // showMessage(message:string){
  // alert(message)
  // }
}
