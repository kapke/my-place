<section ng-controller="Notes.mainCtrl">
	<section class="module-section">
		<h2>{{'Notes'|translate}}</h2>
		<ul>
			<li ng-repeat="note in notes">
				<h3>{{note.title}}</h3>
				<strong>{{note.description}}</strong>
				<p>{{note.content}}</p>
			</li>
		</ul>
	</section>
	<section class="module-section">
		<h2>{{'Notes.newNote'|translate}}</h2>
		<form ng-submit="addNote()">
			<label>{{'Notes.title'|translate}}: <input type="text" name="title" ng-model="newNote.title" /></label>
			<label>{{'Notes.description'|translate}}: <input type="text" name="description" ng-model="newNote.description"></label>
			<label>{{'Notes.content'|translate}}: <textarea name="content" ng-model="newNote.content"></textarea></label>
			<input type="submit" value="{{'Notes.addNote'|translate}}" />
		</form>	
	</section>
</section>