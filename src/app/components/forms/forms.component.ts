import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface FormControls {
    id: FormControl<number | null>;
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    questions: FormArray<FormGroup<QuestionControls>>;
}

export interface QuestionControls {
    text: FormControl<string | null>;
    type: FormControl<QuestionTypes | null>;
    options: FormArray<FormGroup<OptionControls>>;
}

interface OptionControls {
    text: FormControl<string | null>;
}

export enum QuestionTypes {
    Input = 'Input',
    TextArea = 'TextArea',
    Select = 'Select',
    CheckBox = 'CheckBox',
    RadioButton = 'RadioButton',
}

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
    form = new FormGroup<FormControls>({
        id: new FormControl(null),
        name: new FormControl('New Form'),
        description: new FormControl(null),
        questions: new FormArray<FormGroup<QuestionControls>>([]),
    });

    addQuestion(): void {
        const question = new FormGroup<QuestionControls>({
            text: new FormControl('First Name'),
            type: new FormControl(QuestionTypes.Input),
            options: new FormArray<FormGroup<OptionControls>>([]),
        });

        this.form.controls.questions.push(question);
    }

    removeQuestion(questionFormIndex: number): void {
        this.form.controls.questions.removeAt(questionFormIndex);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInFormArray(this.form.controls.questions, event.previousIndex, event.currentIndex);
    }
}

export function moveItemInFormArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
    console.log('from',fromIndex,'to',toIndex)
    const dir = toIndex > fromIndex ? 1 : -1;

    const item = formArray.at(fromIndex);

    for (let i = fromIndex; i * dir < toIndex * dir; i = i + dir) {
        const current = formArray.at(i + dir);
        formArray.setControl(i, current);
    }
    
    formArray.setControl(toIndex, item);
}