<?php 
namespace Kapke\Bundle\MyPlaceBundle\DependencyInjection;

class Module {
	use Serializer;
	protected $serializableProperties;

	private $name;
	private $title;
	private $vendor;
	public function __construct ($moduleDef) {
		$this->serializableProperties = [
			['name' => 'name'],
			['name' => 'title'],
			['name' => 'vendor'],
			[
				'name' => 'slug',
				'value' => [$this, 'getSlug']
			]
		];
		$this->name = $moduleDef['name'];
		$this->title = $moduleDef['title'];
		$this->vendor = $moduleDef['vendor'];
	}

	public function getSlug () {
		$slug = implode(
			array_map(
				function ($letter) {
					if(ctype_upper($letter)) {
						return '_'.strtolower($letter);
					} else {
						return $letter;
					}
				}, 
				str_split($this->name)
			)
		);
		return substr($slug, 1);
	}
}