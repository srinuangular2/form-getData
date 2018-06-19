import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regForm:FormGroup;
  uname;
  pwd;
  email;
  country; 

  constructor(private mybuilder:FormBuilder) { 
    this.regForm=this.mybuilder.group({

      uname:new FormControl(),
      pwd:new FormControl(),
      email:new FormControl(),
      country:new FormControl()
    });

  }

  ngOnInit() {
  }
  postData(data){

    console.log(data);
    
      }
    


}
