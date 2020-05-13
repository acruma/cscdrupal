<?php
namespace Drupal\pulsia_twig_services;
use Drupal\block\Entity\Block;
use Drupal\user\Entity\User;
use Drupal\node\Entity\Node;
use Drupal\taxonomy\Entity\Term;

/**
 * Class DefaultService.
 *
 * @package Drupal\demo_module
 */
class TwigExtension extends \Twig_Extension {
 
  /**
   * {@inheritdoc}
   * This function must return the name of the extension. It must be unique.
   */
  public function getName() {
    return 'block_display';
  }
 
  /**
   * In this function we can declare the extension function.
   */
  public function getFunctions() {
    return array(
      new \Twig_SimpleFunction('getPrecio', array($this, 'getPrecio'), array('is_safe' => array('html'))),
      new \Twig_SimpleFunction('getAliasUrl', array($this, 'getAliasUrl'), array('is_safe' => array('html'))),
      new \Twig_SimpleFunction('getPrueba', array($this, 'getPrueba'), array('is_safe' => array('html'))),
    );
  }

  public function getPrecio() {
    // $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($precio);
    // $precioValue = $term->field_precio->value;
    // return $precioValue;
    return "holaa";
  }

  
  public function getAliasUrl($nid) {
    $alias = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
    return $alias;
  }

  public function getPrueba() {
    $alias = "drupal 8";
    return $alias;
  }
}