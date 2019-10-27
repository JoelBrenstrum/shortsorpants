
declare module 'openweather-apis' {

    function setAPPID(key: string);
    function setCoordinate(lat: number, long: number);
    function getAllWeather(callback: (err, json) => void);
}