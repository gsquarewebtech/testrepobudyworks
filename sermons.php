<?php
/**
 * Bootstrap file.
 *
 * @package SMP
 */

/*
 * Plugin Name: Sermon Manager Pro
 * Plugin URI: https://sermonmanager.pro/
 * Description: This plugin is an addon to Sermon Manager, the most popular sermon plugin for WordPress. Enjoy templates, page builder support, page assignment and much more.
 * Version: 1.0.0-beta.13
 * Author: WP for Church Author
 * URI: https://www.wpforchurch.com/
 *
 * Text Domain: sermon-manager-pro
 *
 * Requires at least: 4.5
 * Tested up to: 5.1
 */

// All files must be PHP 5.3 compatible!
defined( 'ABSPATH' ) or exit;

/**
 * Loads Sermon Manager Pro after other plugins.
 */
function smp_load() {
	define( 'SMP_VERSION', preg_match( '/^.*Version: (.*)$/m', file_get_contents( __FILE__ ), $version ) ? trim( $version[1] ) : 'N/A' );
	define( 'SMP_SM_VERSION', '2.15.15' ); // Minimum required Sermon Manager version.

	define( 'SMP__FILE__', __FILE__ );
	define( 'SMP_BASENAME', plugin_basename( SMP__FILE__ ) );
	define( 'SMP_PATH', dirname( SMP__FILE__ ) . '/' ); // With a trailing slash.
	define( 'SMP_PATH_INCLUDES', SMP_PATH . 'includes/' ); // With a trailing slash.
	define( 'SMP_PATH_SHORTCODES', SMP_PATH_INCLUDES . 'shortcodes/' ); // With a trailing slash.

	define( 'SMP_URL', plugins_url( '/', SMP__FILE__ ) ); // With a trailing slash.
	define( 'SMP_ASSETS_URL', SMP_URL . 'assets/' );

	if ( ! version_compare( PHP_VERSION, '5.3', '>=' ) ) {
		add_action( 'admin_notices', 'smp_fail_php' );
	} elseif ( ! class_exists( 'SermonManager' ) || ( defined( 'SM_VERSION' ) && version_compare( SM_VERSION, SMP_SM_VERSION, '<' ) ) ) {
		add_action( 'admin_notices', 'smp_fail_sm' );
	} else {
		require_once SMP_PATH . 'includes/plugin.php';
	}

	/**
	 * Sermon Manager Pro admin notice for minimum PHP version.
	 *
	 * @since 1.0.0-beta.1
	 */
	function smp_fail_php() {
		/* translators: %s: PHP version */
		$message      = sprintf( __( '<strong>Sermon Manager Pro</strong> requires PHP version <strong>%s</strong> or greater. Plugin will not load.', 'sermon-manager-pro' ), '5.3' );
		$html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
		echo wp_kses_post( $html_message );
	}

	/**
	 * Sermon Manager Pro admin notice for missing/wrong Sermon Manager version.
	 */
	function smp_fail_sm() {
		if ( defined( 'SM_VERSION' ) && version_compare( SM_VERSION, SMP_SM_VERSION, '<' ) ) {
			/* translators: %s: Sermon Manager version */
			$message = sprintf( __( '<strong>Sermon Manager Pro</strong> requires <strong>Sermon Manager</strong> version <strong>%s</strong> or greater. Plugin will not load.', 'sermon-manager-pro' ), SMP_SM_VERSION );
		} else {
			$message = __( '<strong>Sermon Manager Pro</strong> requires <strong>Sermon Manager</strong> to be installed. Plugin will not load.', 'sermon-manager-pro' );
		}
		$html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
		echo wp_kses_post( $html_message );
	}
}

add_action( 'plugins_loaded', 'smp_load' );
