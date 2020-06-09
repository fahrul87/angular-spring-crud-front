import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-seacrh-delete',
  templateUrl: './seacrh-delete.component.html',
  styleUrls: ['./seacrh-delete.component.css']
})
export class SeacrhDeleteComponent implements OnInit {

  users:any;
  email:string;

  constructor(private service:UserRegistrationService) { }

  public delteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }

   public findUserByEmailId(){
     let resp= this.service.getUserByEmail(this.email);
     resp.subscribe((data)=>this.users=data);
    }

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
