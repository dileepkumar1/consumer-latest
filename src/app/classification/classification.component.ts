import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  case_id: string;
  type: string;
  sub_type: string;
  subject:string;
  modal_classification:string;
  date_time:string;
  
}
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {
  }

  open(dailog) {
    this.dialogService.open(dailog);
    
  }

  comments(allcomments) {
    this.dialogService.open(allcomments);
  }

  

  toggleFullScreen() {
    let elem =  document.body; 
    let methodToBeInvoked = elem.requestFullscreen || 
     elem['requestFullScreen'] || elem['mozRequestFullscreen'] 
     || 
     elem['msRequestFullscreen']; 
    if(methodToBeInvoked) methodToBeInvoked.call(elem);

}

// table 
customColumn = 'Action';
defaultColumns = [ 'case_id', 'type', 'sub_type','subject', 'modal_classification', 'date_time'];
allColumns = [ ...this.defaultColumns, this.customColumn,  ];

dataSource: NbTreeGridDataSource<FSEntry>;

sortColumn: string;
sortDirection: NbSortDirection = NbSortDirection.NONE;



updateSort(sortRequest: NbSortRequest): void {
  this.sortColumn = sortRequest.column;
  this.sortDirection = sortRequest.direction;
}

getSortDirection(column: string): NbSortDirection {
  if (this.sortColumn === column) {
    return this.sortDirection;
  }
  return NbSortDirection.NONE;
}

private data: TreeNode<FSEntry>[] = [
  {
    data: {case_id:'546567678', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'22/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'546567672', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'14/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'546567642', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'23/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'546567622', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'24/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'546567172', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'13/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'546567672', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'10/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'546567672', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'28/04/2019 04:24 PM' },
  },
  {
    data: {case_id:'5446567672', type: 'Account Related	', sub_type: 'Break Up Of Disbursed Amount', subject: 'complain about a loan..', modal_classification:'Account related!!', date_time:'24/04/2019 04:44 PM' },
  },
];

getShowOn(index: number) {
  const minWithForMultipleColumns = 400;
  const nextColumnStep = 100;
  return minWithForMultipleColumns + (nextColumnStep * index);
}


}
