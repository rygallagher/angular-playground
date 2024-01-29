import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OptionControls, QuestionControls, QuestionTypes } from '../forms/forms.component';

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
    date = QuestionTypes.Date;

    optionText = '';

    get type(): QuestionTypes | null{
        return this.questionForm.controls.type.value;
    }

    get options(): FormGroup<OptionControls>[] {
        return this.questionForm.controls.options.controls;
    }

    removeQuestionClicked(): void {
        this.removeQuestion.emit();
    }

    addOption(): void {
        this.questionForm.controls.options.push(
            new FormGroup<OptionControls>({
                text: new FormControl(this.optionText)
            })
        );

        this.optionText = '';

        console.log(this.questionForm);
    }
}
