import { Component,OnInit } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { FlightsProvider } from '../../providers/people/people';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
 
  public flights =[]
  constructor(public navCtrl: NavController,public flightService:FlightsProvider,public modalCtrl:ModalController) {}
public shouldReorder=false;
toggleReorder(){
  this.shouldReorder=!this.shouldReorder;
}
ngOnInit(): void {
   this.flightService.getPeople().subscribe((data=>{this.flights=data;
  console.log(data)}))
}
pushPage(flight){
  // this.modalCtrl.create(DetailPage,user).present()
  this.navCtrl.push(DetailPage,flight).then(res=>console.log(res));
}
}
