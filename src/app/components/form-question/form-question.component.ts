import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControls, QuestionTypes } from '../forms/forms.component';

@Component({
    selector: 'app-form-question',
    templateUrl: './form-question.component.html',
    styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent {
    @Input() questionForm!: FormGroup<QuestionControls>;

    @Output() removeQuestion = new EventEmitter();

    input = QuestionTypes.Input;
    textArea = QuestionTypes.TextArea;
    select = QuestionTypes.Select;
    radioButton = QuestionTypes.RadioButton;
    checkBox = QuestionTypes.CheckBox;

    get type(): QuestionTypes | null{
        return this.questionForm.controls.type.value;
    }

    removeQuestionClicked(): void {
        this.removeQuestion.emit();
    }
}
