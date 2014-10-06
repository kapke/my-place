<?php

namespace Kapke\Bundle\MyPlaceBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class KapkeMyPlaceExtension extends Extension
{
    /**
     * {@inheritDoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');
        foreach($configs as $config) {
            if(isset($config['module'])) {
                $modules = $container->hasParameter('kapke_my_place.modules')?$container->getParameter('kapke_my_place.modules'):[];
                print_r($modules);
                $modules[$config['module']['name']] = $config['module'];
                $container->setParameter('kapke_my_place.modules', $modules);
            }
        }
    }
}
