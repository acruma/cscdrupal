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
      new \Twig_SimpleFunction('getPrecio_Extras', array($this, 'getPrecio_Extras'), array('is_safe' => array('html'))),
      new \Twig_SimpleFunction('getTXT_Extras', array($this, 'getTXT_Extras'), array('is_safe' => array('html'))),
      new \Twig_SimpleFunction('getAliasUrl', array($this, 'getAliasUrl'), array('is_safe' => array('html'))),
      new \Twig_SimpleFunction('getPrueba', array($this, 'getPrueba'), array('is_safe' => array('html'))),
    );
  }

  public function getPrecio_Extras($term_id) {
    $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($term_id);
    $precioValue = $term->field_precio->value;
    return $precioValue;
  }

  public function getTXT_Extras($term_id) {
    $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($term_id);
    $text = $term->field_texto_visible->value;
    return $text;
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