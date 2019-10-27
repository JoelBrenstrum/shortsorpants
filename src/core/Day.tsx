import React, { useState } from 'react';
import { SecretSauce, getTheSecretSauce } from '../utils/secretSauce'
import { api } from '../utils/api';
import ShortsOrPants from './ShortsOrPants';

const Day: React.FC = (props) => {
    const [weather, setWeather] = useState();
    if (!weather) {
        api().then((weather) => {
            setWeather(weather);
        });
    }
    return (
        <ShortsOrPants
            clothing={getTheSecretSauce(weather)} />

    );
}

export default Day;
