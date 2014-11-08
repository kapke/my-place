<section ng-controller="Notes.mainCtrl">
	<div class="note new" ng-click="cancelEdits()">
		<form ng-submit="addNote()">
			<label>
				<span>{{'Notes.title'|translate}}:</span>
				<input type="text" name="title" placeholder="{{'Notes.title'|translate}}" ng-model="newNote.title" />
			</label>
			<label>
				<span>{{'Notes.content'|translate}}:</span>
				<textarea name="content" placeholder="{{'Notes.content'|translate}}" ng-model="newNote.content"></textarea>
			</label>
			<input type="submit" value="{{'Notes.addNote'|translate}}" />
		</form>	
	</div>
	<note-view ng-repeat="note in notes | orderBy:'id':true" note="note" />
</section>