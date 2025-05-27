/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// 2. Classe Director
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// 3. Classe Teacher
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    // Sinon (nombre >= 500 ou string), on retourne un Director
    return new Director();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBLHFCQUFxQjtBQUVyQjtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCxvQkFBb0I7QUFFcEI7SUFBQTtJQVlBLENBQUM7SUFYQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDN0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM5QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDdEI7SUFDRCwyREFBMkQ7SUFDM0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gMi4gQ2xhc3NlIERpcmVjdG9yXHJcblxyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XHJcbiAgfVxyXG5cclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xyXG4gIH1cclxuXHJcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIENsYXNzZSBUZWFjaGVyXHJcblxyXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcclxuICB9XHJcblxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XHJcbiAgfVxyXG5cclxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcclxuICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XHJcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcclxuICB9XHJcbiAgLy8gU2lub24gKG5vbWJyZSA+PSA1MDAgb3Ugc3RyaW5nKSwgb24gcmV0b3VybmUgdW4gRGlyZWN0b3JcclxuICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=