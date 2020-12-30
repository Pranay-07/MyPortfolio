import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  ImageArr=["../../assets/ReactLogo.jpg","../../assets/AngularLogo.png","../../assets/CLogo.png","../../assets/DockerLogo.png"]
  imagesource1=""
  imagesource2=""
  imagesource3=""
 public show=false;
  constructor() {
    this.show=false;
   
    var i=0;
    var j=1;
    var k=2;
      setInterval(()=>{
          this.imagesource1=this.ImageArr[i++%this.ImageArr.length];
          this.imagesource2=this.ImageArr[j++%this.ImageArr.length];
          this.imagesource3=this.ImageArr[k++%this.ImageArr.length];
      },1000)
     
      
  }

  ngOnInit(): void {
  }

  toggle(){
    this.show=!this.show;
  }
}
