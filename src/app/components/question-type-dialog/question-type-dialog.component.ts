import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionTypes } from '../forms/forms.component';

@Component({
    selector: 'app-question-type-dialog',
    templateUrl: './question-type-dialog.component.html',
    styleUrls: ['./question-type-dialog.component.scss']
})
export class QuestionTypeDialogComponent {  
    input = QuestionTypes.Input;
    textArea = QuestionTypes.TextArea;
    select = QuestionTypes.Select;
    radioButton = QuestionTypes.RadioButton;
    checkBox = QuestionTypes.CheckBox;
    date = QuestionTypes.Date;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: unknown,
        private dialogRef: MatDialogRef<QuestionTypeDialogComponent>,
    ) {}

    chooseOption(selectedQuestionType: QuestionTypes): void {
        this.dialogRef.close({questionType: selectedQuestionType});
    }
}
