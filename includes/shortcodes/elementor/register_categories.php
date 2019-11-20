<?php
/**
 * This file register categories for Elementor.
 *
 * @since   1.0.0-beta.1
 * @package SMP\Shortcodes
 */

// Register category.
add_action(
	'elementor/elements/categories_registered',
	function ( $elements_manager ) {
		$elements_manager->add_category(
			'sermon-manager-pro-elements',
			array(
				'title' => __( 'Sermon Manager Pro Elements', 'sermon-manager-pro' ),
				'icon'  => 'fa fa-plug',
			)
		);

		$elements_manager->add_category(
			'sermon-manager-pro-theme-elements',
			array(
				'title' => __( 'Sermon Manager Pro Theme Elements', 'sermon-manager-pro' ),
				'icon'  => 'fa fa-plug',
			)
		);
	}
);
