import weather from 'openweather-apis';
import { ISecretSauceOptions } from './secretSauce';

export const api = async () => {
    const p = new Promise<ISecretSauceOptions>(resolve => {

        const callback = (position: Position) => {
            weather.setAPPID('867ecfea9e19b03a3c2f4147b5790157');
            weather.setCoordinate(position.coords.latitude, position.coords.longitude);
            weather.getAllWeather((err, json) => {
                resolve({
                    humidity: json.main.humidity,
                    windSpeed: json.wind.speed,
                    temperature: json.main.temp,
                })
            });
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callback);
        }
    });

    return p

}

