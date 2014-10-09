<?php
namespace Provider\Kapke\Clients;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Provider\Kapke\Clients\DependencyInjection\ClientsProviderExtension;

class ClientsProviderBundle extends Bundle {
	public function getContainerExtension () {
		return new ClientsProviderExtension();
	}
}