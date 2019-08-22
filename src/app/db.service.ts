import { Injectable, NgZone } from '@angular/core';
import {createConnection, getManager} from "typeorm/browser";
import Todo from '~/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private zone: NgZone) {
this.zone.run(async () => {
  const driver: any = require("nativescript-sqlite");
  const connection = await createConnection({
            database: 'test.db',
            type: 'nativescript',
            entities: [
                Todo
            ],
            logging: true,
	    driver: driver
        });
        
        console.log("Connection Created")
        
        await connection.synchronize(false)
        
        console.log("Synchronized")
});
  }

}
