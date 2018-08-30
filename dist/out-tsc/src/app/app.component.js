var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my app';
        this.playlist = {
            name: 'My fav. tracks.',
            tracks: 23,
            color: '#FFFFFF',
            color2: 'white',
            favourite: true,
        };
        this.save();
    }
    AppComponent.prototype.save = function (event) {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var finalColor = '#' + randomColor;
        // alert('twój kolor to:'+ this.playlist.color);
        // alert('random color: '+finalColor);
        this.playlist.color = finalColor;
        // return finalColor;
    };
    ;
    AppComponent.prototype.myFun = function () {
        // alert('funkcja dwa');
    };
    ;
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
;
//# sourceMappingURL=app.component.js.map