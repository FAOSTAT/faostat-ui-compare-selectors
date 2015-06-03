/* global define*/
define(function() {

    'use strict';

    var config = {

        paths: {
            // should be fixed the module name? (entry point)
            'faostat-ui-compare-selectors': './faostat-ui-compare-selectors',

            // config folders
            'faostat-ui-compare-selectors/html': '../html',
            'faostat-ui-compare-selectors/nls': '../nls'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }

    };

    return config;

});