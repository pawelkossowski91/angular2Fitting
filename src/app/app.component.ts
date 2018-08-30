import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';

  playlist = {
    //body
    color: '#F1FFFf',
    //Navbar
    color2: '#7d9471',
    // color2: '#788d65	',
    //jumbotron sec one
    color3: '#ce821a',
    // color3: '#ddb97f	',
    // footer
    color4: '#ce821a',



  };

  save(event){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
  let finalColor='#'+randomColor;
    this.playlist.color=finalColor;
    // return finalColor;
  };
  save2(event){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
  let finalColor2='#'+randomColor;
    this.playlist.color2=finalColor2;
    
  };
  save3(event){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
  let finalColor3='#'+randomColor;
    this.playlist.color3=finalColor3;
    
  };
  save4(event){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
  let finalColor4='#'+randomColor;
    this.playlist.color4=finalColor4;
    
  };
  myFun(){
    // alert('funkcja dwa');
  }


  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }


  constructor(){
    // this.save(event);
    
  };

};
