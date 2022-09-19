'use strict';

/**
 * latest-video service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-video.latest-video');
