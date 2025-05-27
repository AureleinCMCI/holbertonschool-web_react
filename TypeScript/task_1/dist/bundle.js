/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

;
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9DLENBQUM7QUFTRixJQUFNLFlBQVksR0FBeUIsVUFBUyxTQUFpQixFQUFFLFFBQWdCO0lBQ25GLE9BQU8sVUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBYUY7SUFDRSxzQkFBbUIsU0FBaUIsRUFBUyxRQUFnQjtRQUExQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFFakUscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlcntcclxucmVhZG9ubHkgZmZpcnN0TmFtZTogc3RyaW5nO1xyXG5yZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xyXG5mdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xyXG55ZWFyc09mRXhwZXJpZW5jZT86bnVtYmVyICAgO1xyXG5sb2NhdGlvbjogc3RyaW5nO1xyXG5ba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XHJcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xyXG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSBmdW5jdGlvbihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGAke2ZpcnN0TmFtZVswXX0uICR7bGFzdE5hbWV9YDtcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcclxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBJbnRlcmZhY2UgZMOpY3JpdmFudCBsYSBzaWduYXR1cmUgZHUgY29uc3RydWN0ZXVyXHJcbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XHJcbiAgbmV3IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFN0dWRlbnRDbGFzc0ludGVyZmFjZTtcclxufVxyXG5cclxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nKSB7fVxyXG5cclxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9