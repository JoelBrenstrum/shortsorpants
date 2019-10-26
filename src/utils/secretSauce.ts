import { number } from "prop-types";

export enum SecretSauce {
    Shorts,
    Pants
}

interface ISecretSauceOptions {
    temperature: number
    windSpeed: number
    humidity: number
}

enum SecretSauceOptionsWeights {
    Temperature = 1,
    WindSpeed = 1,
    Humidity = 0.5,
}

export const getTheSecretSauce = (options: ISecretSauceOptions) => {
    const { temperature = 10, windSpeed = 10, humidity = 50 } = options;
    let magic = 0;
    const normalizedTemp = normalizeTemp(temperature) * SecretSauceOptionsWeights.Temperature;
    const normalizedHumidity = normalizeHumidity(humidity) * SecretSauceOptionsWeights.Humidity;
    const normalizedSpeed = normalizeWind(windSpeed) * SecretSauceOptionsWeights.WindSpeed;
    if ((normalizedTemp + normalizedHumidity + normalizedSpeed) >= 0.5) {
        return SecretSauce.Shorts;
    }
    return SecretSauce.Pants;

    // if (temperature > 30) {
    //     return SecretSauce.Shorts;
    // }
    // if (temperature > 20) { // high temp
    //     if (windSpeed > 15 && humidity < 80) {
    //         return SecretSauce.Pants;
    //     } else {
    //         return SecretSauce.Shorts;
    //     }
    // } else if (temperature > 18) {
    //     if (windSpeed < 10 && humidity > 80) {
    //         return SecretSauce.Shorts;
    //     }
    //     else {
    //         return SecretSauce.Shorts;
    //     }
    // }
    // return SecretSauce.Pants;
}

const negativeImpact = (value: number) => {
    return - value;
}
const minTemp = 10
const maxTemp = 30
const normalizeTemp = (temp: number) => {
    if (temp > maxTemp) {
        return (1);
    }
    if (temp < minTemp) {
        return (0)
    }
    return ((temp - minTemp) / (maxTemp - minTemp));
}

const minSpeed = 0
const maxSpeed = 30
const normalizeWind = (speed: number) => {
    if (speed > maxSpeed) {
        return negativeImpact(1);
    }
    if (speed < minSpeed) {
        return negativeImpact(0)
    }
    return negativeImpact((speed - minSpeed) / (maxSpeed - minSpeed));
}

const minHumidity = 45
const maxHumidity = 95
const normalizeHumidity = (humidity: number) => {
    if (humidity > maxHumidity) {
        return 1;
    }
    if (humidity < minSpeed) {
        return 0
    }
    return (humidity - minHumidity) / (maxHumidity - minHumidity);
}
// (value-min)/(max-min)