// import { hashPassword } from '@/utils/crypto';
// import { createHash } from 'node:crypto';
import bcrypt from 'bcrypt';

// export function sha256(content: string) {
//   return createHash('sha256').update(content).digest('hex');
// }

// export function hashPassword(password: string) {
//   return sha256(password + process.env.PASSWORD_SECRET);
// }

export async function hashPassword(password: string) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    throw new Error(`Error hashing password: ${error}`);
  }
}
export async function comparePassword(password: string, hash: string) {
  try {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  } catch (error) {
    throw new Error(`Error comparing password: ${error}`);
  }
}
