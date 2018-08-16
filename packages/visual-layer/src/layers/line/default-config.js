import { CLASSPREFIX } from '../../enums/constants';

export const defaultConfig = {
    classPrefix: CLASSPREFIX,
    defClassName: 'layer-line',
    className: '',
    interpolate: 'linear',
    transform: {
        type: 'group'
    },
    interaction: {
        highlight: [{
            type: 'stroke',
            intensity: [0, -10, -10, 0]
        }],
        fade: [{
            type: 'stroke',
            intensity: [0, -30, +30, 0]
        }],
        focus: [{
            type: 'stroke',
            intensity: [0, -30, +30, 0]
        }]
    },
    nearestPointThreshold: 10,
    encoding: {
        color: {},
        x: {},
        y: {},
        strokeOpacity: {
            value: 1
        }
    },
    transition: {
        effect: 'cubic',
        duration: 1000
    },
    connectNullData: false
};

