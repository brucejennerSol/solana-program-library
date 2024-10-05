"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splDiscriminate = void 0;

const { createHash } = '../utils/hashUtils';

export const splDiscriminate = (discriminator, length = 8) => {
    const digest = createHash('sha256').update(discriminator).digest('hex');
    return Buffer.from(digest, 'hex').subarray(0, length);
};

//# sourceMappingURL=splDiscriminate.js.map

