<?php
/**
 * Plugin Name: rtTestimonial
 * Description: Testimonial gutenblock
 * Author: rtCamp, sagarkbhatt
 * Author URI: https://rtcamp.com/
 * Version: 0.1
 * License: GPLv2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: rt-testimonial
 *
 * @package rtTestimonial
 */

if ( ! defined( 'RT_TESTIMONIAL_VER' ) ) {
	define( 'RT_TESTIMONIAL_VER', '0.1' );
}

if ( ! defined( 'RT_TESTIMONIAL_DIR' ) ) {
	define( 'RT_TESTIMONIAL_DIR', __DIR__ );
}

if ( ! defined( 'RT_TESTIMONIAL_DIR_URL' ) ) {
	define( 'RT_TESTIMONIAL_DIR_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

require_once RT_TESTIMONIAL_DIR . '/trait-singleton.php';
require_once RT_TESTIMONIAL_DIR . '/class-register-blocks.php';
