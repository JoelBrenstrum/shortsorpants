import React, { useState } from 'react';
import { SecretSauce, getTheSecretSauce } from '../utils/secretSauce'
import { api } from '../utils/api';

type ShortsOrPantsProps = {
    clothing?: SecretSauce
}
const ShortsOrPants: React.FC<ShortsOrPantsProps> = (props: ShortsOrPantsProps) => {
    const { clothing } = props;

    if (clothing == null) {
        return (<div>
            {'Dressing...'}
        </div>)
    }

    return (
        <div>
            {clothing == SecretSauce.Shorts ? 'Shorts' : 'Pants'}
        </div>
    );
}

export default ShortsOrPants;
