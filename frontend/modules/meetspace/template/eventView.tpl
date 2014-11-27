<h3>{{::event.name}}</h3>
<span class="date">{{::event.time|date:'dd.MM.yyyy HH:mm'}}</span>
<address>{{::event.address}}</address>
<div class="more" ng-click="showFull()">{{'MyPlace.more'|translate}}</div>
<div class="details">
	<h3>{{::event.name}}</h3>
	<span class="date">{{::event.time|date:'dd.MM.yyyy HH:mm'}}</span>
	<address>{{::event.address}}</address>
	<p class="agenda"></p>
	<div class="less" ng-click="hideFull()">{{'MyPlace.close'|translate}}</div>
</div>
