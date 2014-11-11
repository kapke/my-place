function Person (name) {
	this.getName = getName;

	function getName () {
		return name;
	}
}

function Student (name, album) {
	var parent = {};
	Person.call(parent, name);

	function getName () {
		return 'Jestem '+parent.getName()+' i jestem studentem';
	}

	function getAlbum () {
		return album;
	}

	this.getName = getName;
	this.getAlbum = getAlbum;
}

var ala = new Person('Ala');
var kasia = new Student('Kasia', 123456);
console.log(kasia.getName());
console.log(kasia.getAlbum());
console.log(ala.getName());