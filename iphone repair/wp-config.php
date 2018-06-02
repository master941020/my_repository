<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'iphone repair');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2*G#&pjTd&@L~N69u 6<5gn6,8tl9u{y|fhEQG:.>kh1iLz3(N$C?M[tnyMoCy C');
define('SECURE_AUTH_KEY',  '.*I6:*qv b.P qHT$(ghia&?gq6Rl3HMFL|glbLd tS$[0F55BV!fx)Ka$g&`QCH');
define('LOGGED_IN_KEY',    'ossWcSZB-{0V5Thk7AI:KM!!, B=yY3atS27Gr/e}L^dHX3JH+7Om<-Wdjya|oDF');
define('NONCE_KEY',        '?=L 5}&~TA/gvXJ)hnk%S>@6UX-fwe2jN3>E^4uWv^yL !~,VX9ys{t+6v,pHpJ,');
define('AUTH_SALT',        'Q]I6OD,$zZK<a)-Kk}Q)SDVw|y@L-|Vq&a>Ps8IX-c?0|.E_[GGQ?0zx)h:7R@x_');
define('SECURE_AUTH_SALT', 'HW##=$f>i1fQ]t@pX(v(8hr-&7y~+)8LNrk.<ZmHjj5I]Dx?Q|;->TPm<,4AsX5A');
define('LOGGED_IN_SALT',   'oF9>WoApNBJ3b_-+kpgv <AEl=B2T%f]7::5D.^[EV;-.AS~pNnJ8wa%#M>m5n2}');
define('NONCE_SALT',       'UT*Ao)3mVH^(o<K:Rih#;FjW#kCC%4nT,a`&+[2Sy-?%lS;WNY/Bm 9{PqGdM}C$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
