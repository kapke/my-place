<h3>Menu</h3>
<ul>
	<li ng-repeat="item in menu.items">
		<a ui-sref="module({view: item.view})" href="#">{{item.title|translate}}</a>
	</li>
</ul>