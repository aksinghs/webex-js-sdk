/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 */

/**
 * Uses Promise#then to run some number of ticks
 * @param {number} count
 * @returns {Promise}
 */
export default function promiseTick(count) {
  let promise = Promise.resolve();
  while (count > 1) {
    promise = promise.then(() => {
      return promiseTick(1);
    });
    count -= 1;
  }
  return promise;
}
