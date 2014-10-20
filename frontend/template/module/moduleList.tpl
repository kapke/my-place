<h3>{{'MyPlace.moduleList'|translate}}</h3>
<ul>
	<li ng-repeat="module in modules">
		<a ui-sref="module({module: module.slug, view: ''})">{{module.name|translate}}</a>
	</li>
</ul>