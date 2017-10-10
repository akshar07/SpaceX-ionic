import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
 
  public people =[]
  constructor(public navCtrl: NavController,public peopleService:PeopleProvider) {}
public shouldReorder=false;
toggleReorder(){
  this.shouldReorder=!this.shouldReorder;
}
ngOnInit(): void {
   this.peopleService.getPeople().subscribe((data=>this.people=data.results))
}
doRefresh(e){
  this.peopleService.getPeople()
    .subscribe(
      data=>this.people.unshift(...data.results),
      err=>console.log(err),
      ()=>e.complete()
    )
}
doInfinite(e){
  this.peopleService.getPeople()
    .subscribe(
      data=>this.people.push(...data.results),
      err=>console.log(err),
      ()=>e.complete()
    )
}
pushPage(user){
  this.navCtrl.push(DetailPage,user).then(res=>console.log(res));
}
}
