import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model'; 
import { DataService} from '../../services/data.service';



@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
	problems: Problem[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
  	this.getProblem();
  }

  getProblem(){
  	this.problems = this.dataService.getProblems();
  }

}

