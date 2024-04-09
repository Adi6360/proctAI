import crypto from 'crypto';

// Generate a random buffer
const secretKeyBuffer = crypto.randomBytes(32);

// Convert buffer to a hex string
const secretKey = secretKeyBuffer.toString('hex');

console.log('Secure JWT Secret Key:', secretKey);
