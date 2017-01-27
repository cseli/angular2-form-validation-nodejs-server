import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export class BirthdayValidator {
    static birthdayShoudlBeBiggerThan(control: FormControl){
        let age = new Date(+new Date - +new Date(control.value)).getFullYear()-1970;
        const minAge = 18;
        
        if (control.value == '')
            return null; 
     
        if (age < minAge)
            return { 
                ageValid: {
                    minAge: minAge
                } 
            };
            
        return null;
    }
}