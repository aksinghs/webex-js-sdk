/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 */

import UrlSafeBase64 from 'urlsafe-base64';

/**
 * Converts a string from a base64url-encoded string
 * @param {string} str
 * @returns {string}
 */
export function fromBase64url(str) {
  return UrlSafeBase64.decode(str).toString();
}

/**
 * Converts a string to a base64url-encoded string. It also accepts a buffer
 * @param {string|buffer} str
 * @returns {string}
 */
export function toBase64Url(str) {
  let buffer = str;
  if (!Buffer.isBuffer(buffer)) {
    buffer = new Buffer(buffer);
  }

  return UrlSafeBase64.encode(buffer);
}

/**
 * Converts a string to a base64url-encoded string. It also accepts a buffer
 * @param {string|buffer} str
 * @returns {string}
 */
export function encode(str) {
  return toBase64Url(str);
}

/**
 * Converts a string from a base64url-encoded string
 * @param {string} str
 * @returns {string}
 */
export function decode(str) {
  return fromBase64url(str);
}

export default {
  fromBase64url,
  toBase64Url,
  encode,
  decode
};
