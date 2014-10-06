<?php
namespace Provider\Kapke\Notes;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Provider\Kapke\Notes\DependencyInjection\NotesProviderExtension;

class NotesProviderBundle extends Bundle {
	public function getContainerExtension () {
		return new NotesProviderExtension();
	}
}