import { Component, OnInit } from '@angular/core';
import { Form } from './form';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  model = new Form();
  result :any;

  onSubmit(){
    console.log(this.model);
    this.contactService.save(this.model).subscribe(x=>{
      console.log(x);
      this.result = x;
    });

  }

}
