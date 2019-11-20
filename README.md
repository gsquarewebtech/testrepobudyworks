# Sermon Manager Pro #

Sermon Manager Pro is an add-on for Sermon Manager.

It's currently in Beta.

## Requirements ##
- Composer

## Set-up ##

1. Run `composer install` to get all of the required packages for development, or if you want a production version, run `composer install --no-dev`
2. Point your IDE to PHPCS and PHPUnit paths (`./vendor/bin/phpcs`, `./vendor/bin/phpunit`)
3. If needed, PHPCS and PHPUnit configuration files are located at:
    - PHPCS: `./phpcs.xml.dist`
    - PHPUnit: `./phpunit.xml.dist`