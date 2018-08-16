import { makeElement } from 'muze-utils';
import { SpawnableSideEffect } from 'muze-firebolt';
import { CLASSPREFIX, HEIGHT, WIDTH, HORIZONTAL, RECT } from '../../../enums/constants';
import { SELECTIONBOX } from '../../../enums/side-effects';
import { selectionBoxDrag } from '../../physical/selection-box-drag';
import './styles.scss';

/**
 * This class is used to create a selection box which is used by visual unit for brushing and
 * selection in the canvas.
 * @class SelectionBox
 */
/* istanbul ignore next */ class SelectionBox extends SpawnableSideEffect {
    static formalName () {
        return SELECTIONBOX;
    }

    /**
     * It returns the default configuration needed by selectionbox.
     * @return {Object} Default configuration of the selection box.
     */
    static defaultConfig () {
        return {
            className: 'legend-selection-box',
            classPrefix: CLASSPREFIX
        };
    }

    /**
     * Draws the selectionbox with the specified dimensions.
     */
    /* istanbul ignore next */ apply (selectionSet, payload) {
        const firebolt = this.firebolt;
        const context = firebolt.context;
        const config = this.config();
        const axis = context.axis().source();
        const className = `${config.classPrefix}-${config.className}`;

        const domain = payload.criteria[firebolt.context.fieldName()];
        const axisScale = axis.scale();
        const range = domain ? [axis.getScaleValue(domain[0]), axis.getScaleValue(domain[1])] : [];

        const axisType = context.config().align === HORIZONTAL ? 'x' : 'y';

        const gradientDimension = firebolt.context.measurement().gradientDimensions[axisType === 'x' ?
            HEIGHT : WIDTH];

        const rangeShifter = axisScale.range()[axisType === 'x' ? 0 : 1];
        const legendGradContainer = context.getDrawingContext().svgContainer;
        const legendSelGroup = makeElement(legendGradContainer, 'g', [1], `${config.classPrefix}-selection-box-group`);

        let x,
            y,
            width,
            height;
        if (firebolt.context.config().align === HORIZONTAL) {
            x = range[0] - rangeShifter || 0;
            y = 0;
            width = range[1] - range[0] || 0;
            height = gradientDimension;
        } else {
            x = 0;
            y = range[1] - rangeShifter || 0;
            height = range[0] - range[1] || 0;
            width = gradientDimension;
        }
        const enterFn = function(el) {
            selectionBoxDrag(firebolt)(el.node(), ['brush']);
        };
        const selBox = makeElement(legendSelGroup, RECT, [{ domain, x, y, width, height }], className,
            { enter: enterFn });
        selBox.attr('y', y)
                        .attr('x', x)
                        .attr(WIDTH, width)
                        .attr(HEIGHT, height);
    }
}

export default SelectionBox;

