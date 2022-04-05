import { Component, OnInit } from '@angular/core';
import { Factoryclass } from '../factoryclass';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLogicService } from '../service-logic.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public factoryobject=new Factoryclass;
  ageinput:any;
  public printval:any;
  public usernamealert:any;
  nameinput:any;
  username!: number;
  userlist:any=[]
  
  constructor(private router:Router,private route:ActivatedRoute,private serviceobj:ServiceLogicService) {
  }

  ngOnInit(): void {
  }

  signupuser(item:any)
  {
    this.ageinput=this.factoryobject.Age;
    this.nameinput=this.factoryobject.FirstName;
    this.serviceobj.apicalluserexist(this.nameinput).subscribe(data=>{
      this.serviceobj.setData(data);
      this.username=this.serviceobj.searchdetails;
      //alert(this.username)
      });
      if(this.validate(this.ageinput) && this.userexist(this.username))
        {
          this.serviceobj.apicallinsert(item).subscribe(data=>{
          alert("User Registered successfully");
          this.router.navigate(['./mainpage']);
          });
        }
        else
        {
          return;
        }
  }

  validate(value:any): Boolean
  {
    if((value<20) || (value>40))
    {
      this.printval="The age should be between 20 and 40";
      return false;
    }
    else
    {
      return true;
    }
  }

  userexist(value:any): Boolean
  {
      
      if(value==false)
      {
        return true;
      }
      else
      {
        this.usernamealert="Username already exists.Please choose another username";
        return false;
      }
  } 
}
