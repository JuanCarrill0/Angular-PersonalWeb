import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from'sweetalert2';


@Component({
  selector: 'contacto',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss']
})

export class ContactameComponent implements OnInit{

  contactForm: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  asunt: FormControl = new FormControl("", [Validators.required]);
  message: FormControl = new FormControl("", [Validators.required]);

  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string = ""; // the response message to show to the user

  constructor(private formBuilder:FormBuilder, private http:HttpClient) {
    this.contactForm = this.formBuilder.group({
        name: this.name,
        email: this.email,
        asunt: this.asunt,
        message: this.message
    });
  }

  onSubmit(){
    if (this.contactForm.status == "VALID") {
      this.contactForm.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.contactForm.get("name")?.value);
      formData.append("email", this.contactForm.get("email")?.value);
      formData.append("asunt", this.contactForm.get("asunt")?.value);
      formData.append("message", this.contactForm.get("message")?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://formspree.io/f/xdovkkyr", formData).subscribe(
        (response) => {
          // choose the response message
          swal.fire(
            'Gracias llenar el formulario!',
            'En breves estaré contactandome contigo!',
            'success'
          )
          this.contactForm.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha sucedido un error!',
          })
          this.contactForm.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

  ngOnInit():void{
    
  }
}

