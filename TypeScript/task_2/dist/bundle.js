/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector)
/* harmony export */ });
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
window.createEmployee = createEmployee;
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        // Si c'est un directeur, on exécute ses tâches de directeur
        return employee.workDirectorTasks();
    }
    else {
        // Sinon, on exécute ses tâches d'enseignant
        return employee.workTeacherTasks();
    }
}
window.executeWork = executeWork;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNNQSxxQkFBcUI7QUFFckI7SUFBQTtJQVlBLENBQUM7SUFYQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQsb0JBQW9CO0FBRXBCO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsMkRBQTJEO0lBQzNELE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBQ0EsTUFBYyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFFekMsU0FBUyxVQUFVLENBQUMsUUFBYTtJQUN0QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQ3BELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLDREQUE0RDtRQUM1RCxPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3ZDO1NBQU07UUFDSCw0Q0FBNEM7UUFDNUMsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN0QztBQUNMLENBQUM7QUFDQSxNQUFjLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gMi4gQ2xhc3NlIERpcmVjdG9yXHJcblxyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XHJcbiAgfVxyXG5cclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xyXG4gIH1cclxuXHJcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIENsYXNzZSBUZWFjaGVyXHJcblxyXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcclxuICB9XHJcblxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XHJcbiAgfVxyXG5cclxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XHJcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xyXG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XHJcbiAgfVxyXG4gIC8vIFNpbm9uIChub21icmUgPj0gNTAwIG91IHN0cmluZyksIG9uIHJldG91cm5lIHVuIERpcmVjdG9yXHJcbiAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xyXG59XHJcbih3aW5kb3cgYXMgYW55KS5jcmVhdGVFbXBsb3llZSA9IGNyZWF0ZUVtcGxveWVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IGFueSk6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcclxuICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3RvcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XHJcbiAgICAgICAgLy8gU2kgYydlc3QgdW4gZGlyZWN0ZXVyLCBvbiBleMOpY3V0ZSBzZXMgdMOiY2hlcyBkZSBkaXJlY3RldXJcclxuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2lub24sIG9uIGV4w6ljdXRlIHNlcyB0w6JjaGVzIGQnZW5zZWlnbmFudFxyXG4gICAgICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XHJcbiAgICB9XHJcbn1cclxuKHdpbmRvdyBhcyBhbnkpLmV4ZWN1dGVXb3JrID0gZXhlY3V0ZVdvcms7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==