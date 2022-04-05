import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Factoryclass } from '../factoryclass';
import { ServiceLogicService } from '../service-logic.service';


@Component({
  selector: 'app-detailsshowing-component',
  templateUrl: './detailsshowing-component.component.html',
  styleUrls: ['./detailsshowing-component.component.css']
})
export class DetailsshowingComponentComponent implements OnInit {
  
  public factoryobject= new Factoryclass();

  constructor(private router:Router,private route:ActivatedRoute,public serviceobj:ServiceLogicService) { }

  ngOnInit(): void {
  }
  backtomainpage()
  {
    this.router.navigate(['./mainpage']);
  }
}
