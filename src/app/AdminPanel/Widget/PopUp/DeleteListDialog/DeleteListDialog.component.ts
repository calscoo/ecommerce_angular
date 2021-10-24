import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-delete-list-dialog',
    templateUrl: './DeleteListDialog.component.html',
    styleUrls: ['./DeleteListDialog.component.scss']
})

export class DeleteListDialogComponent implements OnInit {

    data: string;

    constructor(public dialogRef: MatDialogRef<DeleteListDialogComponent>) {
    }

    ngOnInit() {
    }

    yes() {
        this.dialogRef.close('yes');
    }
}
