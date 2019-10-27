import React, { useState } from 'react';
import { SecretSauce, getTheSecretSauce, ISecretSauceOptions } from '../utils/secretSauce'
import { api } from '../utils/api';
import ShortsOrPants from './ShortsOrPants';

type DayProps = {
    weather: ISecretSauceOptions
}

const Day: React.FC<DayProps> = (props) => {

    return (
        <ShortsOrPants
            clothing={getTheSecretSauce(props.weather)} />

    );
}

export default Day;
