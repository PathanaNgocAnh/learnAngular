import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/class/interface/role';



@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{


  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client create success");
        this.loadClient();
        this.clientObj = new Client();
      }else{
        alert(res.message)
      }
    })
  }

  onEdit(data: Client){
    this.clientObj = data;
  }

  onDelete(id: number){

    const isDelete = confirm("Do you want to delete");
    if (isDelete) {


      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
        if(res.result){
          alert("Client delete success");
          this.loadClient();
          this.clientObj = new Client();
        }else{
          alert(res.message)
        }

      })

    }

}
}
