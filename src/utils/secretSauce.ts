import { number } from "prop-types";

export enum SecretSauce {
    Shorts,
    Pants
}

export interface ISecretSauceOptions {
    temperature?: number
    windSpeed?: number
    humidity?: number
    rain?: number
}

enum SecretSauceOptionsWeights {
    Temperature = 1,
    WindSpeed = 1,
    Humidity = 0.5,
}

export const getTheSecretSauce = (options: ISecretSauceOptions) => {
    if (!options) {
        return undefined
    }
    const { temperature = 10, windSpeed = 10, humidity = 50, rain = 0 } = options;
    let magic = 0;
    const normalizedTemp = normalizeTemp(temperature) * SecretSauceOptionsWeights.Temperature;
    const normalizedHumidity = normalizeHumidity(humidity) * SecretSauceOptionsWeights.Humidity;
    const normalizedSpeed = normalizeWind(windSpeed) * SecretSauceOptionsWeights.WindSpeed;
    if (rain > 50) { //50 percent rain
        return SecretSauce.Pants
    }
    if ((normalizedTemp + normalizedHumidity + normalizedSpeed) >= 0.5) {
        return SecretSauce.Shorts;
    }
    return SecretSauce.Pants;
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