function Person (name) {
	this.name = name;
}

Person.prototype.getName = function () {
	return this.name;
}

function Student (name, album) {
	Person.call(this, name);
	this.album = album;
}
Student.prototype.getName = function () {
	return 'Jestem'+Person.prototype.getName.call(this)+' i jestem studentem';
}
Student.prototype.getAlbum = function () {
	return this.album;
}

var ala = new Person('Ala');
var kasia = new Student('Kasia', 123456);
console.log(kasia.getName());
console.log(kasia.getAlbum());
console.log(ala.getName());