import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends
    PassportStrategy(Strategy) {
    constructor(config: ConfigService) {
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "!@#QWE123qwe",
        });
    }
    async validate(payload: any) {
        if (payload.data.role === "ADMIN") {
            return true
        } else { return false }
    }
}