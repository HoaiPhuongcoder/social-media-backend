import User from '@/models/schemas/User.schema';
import databaseService from './database.services';
import { RegisterReqBody } from '@/models/requests/User.requests';
import { hashPassword } from '@/utils/crypto';
import { signToken } from '@/utils/jwt';
import { TokenType } from '@/constants/enums';
import { SignOptions } from 'jsonwebtoken';

class UserService {
  private async signAccessToken(user_id: string) {
    return await signToken({
      payload: {
        user_id,
        token_type: TokenType.AccessToken
      },
      options: {
        expiresIn: (process.env.ACCESS_TOKEN_EXPIRES_IN || '15m') as SignOptions['expiresIn']
      }
    });
  }
  private async signRefreshToken(user_id: string) {
    return await signToken({
      payload: {
        user_id,
        token_type: TokenType.RefreshToken
      }
    });
  }

  private async signAccessAndRefreshToken(user_id: string) {
    return await Promise.all([this.signAccessToken(user_id), this.signRefreshToken(user_id)]);
  }
  async register(payload: RegisterReqBody) {
    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        date_of_birth: new Date(payload.date_of_birth),
        password: await hashPassword(payload.password)
      })
    );
    const user_id = result.insertedId.toString();

    const [access_token, refresh_token] = await this.signAccessAndRefreshToken(user_id);
    return {
      access_token,
      refresh_token
    };
  }

  async login(user_id: string) {
    const [access_token, refresh_token] = await this.signAccessAndRefreshToken(user_id);
    return {
      access_token,
      refresh_token
    };
  }

  async checkEmailExists(email: string) {
    const user = await databaseService.users.findOne({ email });
    return Boolean(user);
  }
}

const userService = new UserService();
export default userService;
