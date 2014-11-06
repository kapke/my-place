<section ng-controller="Notes.mainCtrl">
	<div class="note new">
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
	<note-view ng-repeat="note in notes" note="note" />
</section>

<!-- <section ng-controller="Notes.mainCtrl">
	<section class="module-section">
		<h2>{{'Notes'|translate}}</h2>
	</section>
	<section class="module-section">
		<h2>{{'Notes.newNote'|translate}}</h2>	
	</section>
</section> -->