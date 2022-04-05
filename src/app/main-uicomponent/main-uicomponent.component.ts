import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Factoryclass } from '../factoryclass';
import { ServiceLogicService } from '../service-logic.service';

@Component({
  selector: 'app-main-uicomponent',
  templateUrl: './main-uicomponent.component.html',
  styleUrls: ['./main-uicomponent.component.css']
})
export class MainUIComponentComponent implements OnInit {

  public factoryobject= new Factoryclass();
  mySubscription: any;
  userlist:any=[];

  constructor(private router:Router,private route:ActivatedRoute,public serviceobj:ServiceLogicService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      this.router.navigated = false;
      }
    });
   }

  ngOnInit(): void {
    this.onSubmit();
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  routetosignup()
  {
    this.router.navigate(['./signuppage']);
  }

  onSubmit()
  {
    this.serviceobj.apicallselect().subscribe(data=>{
    this.userlist=data;
    })
  }

  getuserdetails(item:any)
  {

    this.serviceobj.apicallUserdetails(item).subscribe(searchdata=>{
      this.serviceobj.setData(searchdata);
    })
    this.router.navigate(['./detailspage']);
  }


  deleteuserdetails(item:any)
  {
    //if(confirm('Are you sure??'))
    //{
    this.serviceobj.apicalldelete(item.UserId).subscribe(data=>{
      alert("User Deleted successfully");
      this.router.navigate(['./mainpage']);});
    //}
  }
}
