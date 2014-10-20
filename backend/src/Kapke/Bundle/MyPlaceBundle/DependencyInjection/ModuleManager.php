<?php
namespace Kapke\Bundle\MyPlaceBundle\DependencyInjection;

class ModuleManager
{
    private $modules;

    public function __construct($modules)
    {
        $this->modules = array_map(function ($module) {
            return new Module($module);
        }, $modules);
    }
    public function getModules()
    {
        return $this->modules;
    }
    public function getModule($name)
    {
        return $this->modules[$name];
    }
}
