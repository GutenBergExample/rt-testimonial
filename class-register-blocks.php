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

		// add_action( 'enqueue_block_editor_assets', array( $this, 'register_sample_block' ) );
	}
}

add_action( 'plugins_loaded', function () {
	Register_Blocks::get_instance();
} );
