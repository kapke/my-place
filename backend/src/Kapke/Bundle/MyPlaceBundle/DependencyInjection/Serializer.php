<?php
namespace Kapke\Bundle\MyPlaceBundle\DependencyInjection;


trait Serializer {
	public function jsonSerialize () {
		$output = [];
		foreach ($this->serializableProperties as $property) {
			$name = $property['name'];
			$value = null;
			if(isset($property['value'])) {
				if(is_callable($property['value'])) {
					$value = call_user_func($property['value']);
				} else {
					$value = $this->{$property['value']};
				}
			} else {
				$value = $this->{$name};
			}
			$simple = isset($property['simple'])?$property['simple']:true;
			if(!$simple) {
				$value = $value->toArray();
			}
			$output[$name] = $value;
		}
		return $output;
	}
}
?>