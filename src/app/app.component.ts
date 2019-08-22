import { Component } from "@angular/core";
import { DBService } from "./db.service";


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

constructor(private db : DBService) { 


}
}
