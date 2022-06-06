import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { jwtConstants } from '../jwt.constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserData, UserJwt } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(user: UserJwt): Promise<UserData> {
    const _user = await this.userService.findOneByUuid(user.uuid);
    if (user.uuid === _user.uuid) {
      return {
        uuid: _user.uuid,
        username: _user.username,
        email: _user.email,
      };
    } else {
      throw new NotFoundException();
    }
  }
}
