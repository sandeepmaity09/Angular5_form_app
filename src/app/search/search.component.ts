import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

	searchField: FormControl;
	searches: string[] = [];

	ngOnInit(){
		this.searchField = new FormControl();
		this.searchField.valueChanges
			.debounceTime(400)
			.distinctUntilChanged()
			.subscribe(term => {
				this.searches.push(term);
			})
	}

}
