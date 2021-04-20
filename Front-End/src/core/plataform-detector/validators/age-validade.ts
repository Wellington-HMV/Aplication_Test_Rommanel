import { AbstractControl } from "@angular/forms";

export function ageValidator(value: AbstractControl) {
    let date = value.value;
    let day;
    let mounth;
    let year;

    if (date.length > 2)
        day = date.substring(0, 2);
    if (date.length > 4)
        mounth = date.substring(2, 4);
    if (date.length > 6)
        year = date.substring(4, 8);

    let dt = day + "-" + mounth + "-" + year;
    let dtValue = new Date(dt);
    let dActual = new Date();
    var y = dActual.getFullYear() - dtValue.getFullYear();
    var m = dActual.getMonth() - dtValue.getMonth();
    var d = dActual.getDate() - dtValue.getDate();

    if (m < 0 || (m === 0 && dActual.getDate() < dtValue.getDate()))
        y--;

    if (y < 18) {
        return { older: true };
    } else {
        return null;
    }
}