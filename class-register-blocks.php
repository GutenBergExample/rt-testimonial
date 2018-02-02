<?php
/**
 * Register plugin blocks
 *
 * @package rtTestimonial
 */

namespace rtTestimonial\Gutenblocks;

/**
 * Class Register_Blocks
 *
 * @package rtTestimonial\Gutenblocks
 */
class Register_Blocks {

	use \rtTestimonial\Traits\Singleton;

	/**
	 * Initialize Block.
	 */
	protected function init() {

		add_action( 'enqueue_block_editor_assets', array( $this, 'add_block_assets' ) );
	}

	/**
	 * Enqueue block assets
	 */
	public function add_block_assets() {

		wp_enqueue_script(
			'gutenberg-lyrics-block',
			RT_TESTIMONIAL_DIR_URL . 'block/build/build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
			RT_TESTIMONIAL_VER
		);
	}
}

add_action( 'plugins_loaded', function () {
	Register_Blocks::get_instance();
} );
