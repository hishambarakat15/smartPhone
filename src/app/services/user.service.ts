import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private aFireStore: AngularFirestore) { }

  addNewUser(id,fname,lname,username,email,dateofbirth){
    return this.aFireStore.doc("user/"+id).set({
       " FirstName": fname,
        "LastName": lname,
        "UserName": username,
        "Email": email,
        "DateOfBirth": dateofbirth

    });
  }
}
