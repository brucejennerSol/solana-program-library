import CryptoJS from 'crypto-js';

export function createHash(algorithm) {
  if (algorithm !== 'sha256' && algorithm !== 'sha512') {
    throw new Error('Unsupported algorithm. Use sha256 or sha512.');
  }

  return {
    update: (data) => {
      const hash = algorithm === 'sha256' ? CryptoJS.SHA256(data) : CryptoJS.SHA512(data);
      return {
        digest: (encoding) => {
          return encoding === 'hex' ? hash.toString(CryptoJS.enc.Hex) : hash.toString(CryptoJS.enc.Base64);
        }
      };
    }
  };
}

