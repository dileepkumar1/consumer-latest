import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
  }

  open(dailog) {
    this.dialogService.open(dailog);
  }
}
