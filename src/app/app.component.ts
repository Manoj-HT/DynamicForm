import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import mock from './mock';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit(): void {
    this.getJSON();
  }
  private fb = inject(FormBuilder)
  categoryForm!: FormGroup
  bookCategories!: {
    category: string;
    fields: (
      | {
          label: string;
          type: string;
          mandatory: boolean;
          hidden: boolean;
          options: string[];
        }
      | {
          label: string;
          type: string;
          mandatory: boolean;
          hidden: boolean;
          options?: undefined;
        }
    )[];
  }[];
  getJSON() {
    this.bookCategories = mock.bookcategories;
  }
  fields!: ({ label: string; type: string; mandatory: boolean; hidden: boolean; options: string[]; } | { label: string; type: string; mandatory: boolean; hidden: boolean; options?: undefined; })[]
  isFields = signal(false)

  category!: { fields: any; category?: string; }
  selectedCategory(e: Event) {
    let select = e.target as HTMLSelectElement
    let index = Number(select.value)
    this.category = this.bookCategories[index]
    this.fields = this.category.fields
    let formControlObject: any = {}
    for(let item of this.fields){
     formControlObject[item.label] = ['', item.mandatory ? Validators.required : null] 
    }
    this.categoryForm = this.fb.group(formControlObject)
    this.isFields.set(true)
  }

  submit(){
    console.log({category : this.category.category, fields : this.categoryForm.value});
  }

  getDragEvent(e : Event){
    console.log(e);
  }
}
