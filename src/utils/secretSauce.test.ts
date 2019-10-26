import { getTheSecretSauce, SecretSauce } from './secretSauce'
describe('Secret Sauce - Shorts', () => {

    //shorts
    it('30T 90H W15', () => {
        expect(getTheSecretSauce({ temperature: 30, humidity: 90, windSpeed: 15 })).toBe(SecretSauce.Shorts)
    });

    it('30T 100H W25', () => {
        expect(getTheSecretSauce({ temperature: 30, humidity: 100, windSpeed: 25 })).toBe(SecretSauce.Shorts)
    });

    it('30T 90H W50', () => {
        expect(getTheSecretSauce({ temperature: 15, humidity: 90, windSpeed: 0 })).toBe(SecretSauce.Shorts)
    });

    it('30T 90H W50', () => {
        expect(getTheSecretSauce({ temperature: 18, humidity: 90, windSpeed: 0 })).toBe(SecretSauce.Shorts)
    });

    it('18T 90H W20 ', () => {
        expect(getTheSecretSauce({ temperature: 18, humidity: 99, windSpeed: 10 })).toBe(SecretSauce.Shorts)
    });

    it('25T 80H W15 - Shorts', () => {
        expect(getTheSecretSauce({ temperature: 25, humidity: 80, windSpeed: 15 })).toBe(SecretSauce.Shorts)
    });


});

describe('Secret Sauce - Pants', () => {
    it('10T 90H W0', () => {
        expect(getTheSecretSauce({ temperature: 10, humidity: 90, windSpeed: 0 })).toBe(SecretSauce.Pants)
    });
    it('13T 90H W5', () => {
        expect(getTheSecretSauce({ temperature: 13, humidity: 90, windSpeed: 5 })).toBe(SecretSauce.Pants)
    });
    it('25T 80H W15 - Shorts', () => {
        expect(getTheSecretSauce({ temperature: 25, humidity: 50, windSpeed: 15 })).toBe(SecretSauce.Pants)
    });

    it('18T 90H W20', () => {
        expect(getTheSecretSauce({ temperature: 18, humidity: 90, windSpeed: 20 })).toBe(SecretSauce.Pants)
    });

    it('20T 90H W15', () => {
        expect(getTheSecretSauce({ temperature: 20, humidity: 90, windSpeed: 15 })).toBe(SecretSauce.Pants)
    });

    it('20T H50 W20', () => {
        expect(getTheSecretSauce({ temperature: 20, humidity: 50, windSpeed: 20 })).toBe(SecretSauce.Pants)
    });

    it('25T 80H W20', () => {
        expect(getTheSecretSauce({ temperature: 25, humidity: 80, windSpeed: 20 })).toBe(SecretSauce.Pants)
    });
})