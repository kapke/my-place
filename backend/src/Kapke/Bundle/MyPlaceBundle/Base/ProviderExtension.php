<?php
namespace Kapke\Bundle\MyPlaceBundle\Base;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
abstract class ProviderExtension extends Extension
{
    private $dir;

    public function __construct () {
        $reflectionClass = new \ReflectionClass($this);
        $this->dir = dirname($reflectionClass->getFileName());
    }
    /**
     * {@inheritDoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $Class = $this->getConfigurationClass();
        $configuration = new $Class();
        //$configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $loader = new Loader\YamlFileLoader($container, new FileLocator($this->dir.'/../Resources/config'));
        $loader->load('services.yml');
    }

    private function getConfigurationClass () {
        $Class = explode('\\', get_class($this));
        array_pop($Class);
        $Class[] = 'Configuration';
        $Class = implode('\\', $Class);
        return $Class;
    }
}
