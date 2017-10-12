import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams,ViewController } from 'ionic-angular';
import {SafeResourceUrl,DomSanitizer} from '@angular/platform-browser';  

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public flight=this.navParams.data;
  constructor(public sanitizer: DomSanitizer,public alertCtrl:AlertController,public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }
  dismiss(){
    let alert = this.alertCtrl.create({
      title: 'Close Modal?',
      message: 'are you sure?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: ()=>{
          console.log('clicked');
        }
      },{
        text: 'yes',
        handler: ()=>{
          this.viewCtrl.dismiss()
        }
      }]
    })
    alert.present()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
videoURL(url){
   return this.sanitizer.bypassSecurityTrustResourceUrl(url) 
}
}
