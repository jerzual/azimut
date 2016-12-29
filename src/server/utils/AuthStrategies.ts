import * as passport from 'passport';
import * as PassportFacebook from 'passport-facebook';
import * as PassportTwitter from 'passport-twitter';
import * as PassportLocal from 'passport-local';
import * as logger from 'winston';

export default class AuthStrategies {
    localStrategy: passport.Strategy;
    facebookStrategy: passport.Strategy;
    twitterStrategy: passport.Strategy;
    constructor(passport: passport.Passport) {
        const facebookOptions: PassportFacebook.IStrategyOption = {
            clientID: '',
            clientSecret: '',
            callbackURL: '',
        };
        const twitterOptions: PassportTwitter.IStrategyOption = {
            consumerKey: '',
            consumerSecret: '',
            callbackURL: '',
        }

        this.localStrategy = new PassportLocal.Strategy(
            (data) => {
                logger.info('local login verification');
            }
        );
        this.facebookStrategy = new PassportFacebook.Strategy(
            facebookOptions,
            (
                accessToken: string,
                refreshToken: string,
                profile: PassportFacebook.Profile,
                done: Function
            ) => {
                logger.info('facebook login verification');
            }
        );
        this.twitterStrategy = new PassportTwitter.Strategy(
            twitterOptions,
            (
                accessToken: string,
                refreshToken: string,
                profile: PassportTwitter.Profile,
                done: Function
            ) => {
                logger.info('twitter login verification');
            }
        );
    }
}