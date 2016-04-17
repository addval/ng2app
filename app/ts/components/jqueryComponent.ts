import { Component, OnInit,ElementRef } from 'angular2/core';
declare var $: any;


@Component({
	selector:'jquery-component',
	template:`
		<div class="row">
		<div class="col-md-6">
			<p>Click button below</p>
			<button id="jq" class="btn btn-success">Click Me</button>
		</div>
		<div class="col-md-6">
			<button id="code" class="btn btn-success">View Code</button>
			<pre class="hide">
				import { Component, OnInit,ElementRef } from 'angular2/core';
				declare var $: any;


				@Component({
					selector:'jquery-component',
					templateUrl:'../templates/jquery-component.html'
				})
				export class JqueryComponent implements OnInit{
					constructor(private _elmref:ElementRef){}
					ngOnInit():any{
						$(this._elmref.nativeElement).find('#jq').on('click', function() {
							alert("Hi, from jquery");
						});
						$(this._elmref.nativeElement).find('#code').on('click', function() {
							$(this._elmref.nativeElement).find('pre').toggle();
						});

					}
				}
			</pre>
		</div>
	</div>
	`
})
export class JqueryComponent implements OnInit{
	constructor(private _elmref:ElementRef){}
	ngOnInit():any{
		var mainelm = this._elmref.nativeElement;
		$(mainelm).find('#jq').on('click', function() {
			alert("Hi, from jquery");
		});
		$(mainelm).find('#code').on('click', function() {
			$(mainelm).find('pre').toggleClass('hide');
		});

	}
}