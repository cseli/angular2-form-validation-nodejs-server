import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Observable } from "rxjs/Rx";

import { BirthdayValidator } from './birthdayValidator';
import { MailValidator } from './mailValidator';
import { PostService } from '../services/post.service'

@Component({
    selector: 'spaForm',
    templateUrl: 'app/components/spaForm.component.html'
})
export class SpaFormComponent {

    private searchStr: string;
    private dataService: CompleterData;
    private searchData = [
        { role: 'Software Developer' },
        { role: 'Software Tester' },
        { role: 'Software Engineer' },
        { role: 'Project Owner' },
        { role: 'Project Manager' },
        { role: 'Assistant' },
        { role: 'Trainee' }
    ];

    form: FormGroup;ß

    constructor(fb: FormBuilder, private completerService: CompleterService, private postservice: PostService) {
        this.dataService = completerService.local(this.searchData, 'role', 'role');
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                MailValidator.mailFormat
            ])],
            occupation: [],
            birthday: ['', Validators.compose([
                BirthdayValidator.birthdayShoudlBeBiggerThan
            ])]
        });
    }

    sendSpaForm(form) {
        let data = {
            name: form.controls.name._value,
            email: form.controls.email._value,
            birthday: form.controls.birthday._value,
            occupation: form.controls.occupation._value,
        }
        this.postservice.createPost(data).subscribe(
            data => {
                console.log("Send form to server successfully.")
            },
            error => {
                console.error(error);
            }
        );
    }

}