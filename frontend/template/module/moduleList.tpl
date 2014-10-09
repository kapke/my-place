<header>Module list</header>
<ul>
	<li ng-repeat="module in modules">
		<a ui-sref="module({module: module.slug})">{{module.title}}</a>
	</li>
</ul>