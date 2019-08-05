import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employees:String[];
  constructor(private cdetails: CandidateService) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  displayedColumns: string[] = ['savedExecID', 'description', 'category', 'browser','userName','environment','creator','createdDate'];
  dataSource= new MatTableDataSource<any>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.cdetails.getAllInfo().subscribe(data => {
    console.log('Loading here');
    this.dataSource.data=data;
    });
  }

}