import SimpleAxis from '../simple-axis';
import { BAND } from '../../enums/scale-type';
import { DOMAIN } from '../../enums/constants';
import { TOP, BOTTOM } from '../../enums/axis-orientation';
import { calculateBandSpace } from './helper';
import { setOffset } from '../common-helper';

export default class BandAxis extends SimpleAxis {

     /**
     *
     *
     * @static
     * @returns
     * @memberof BandAxis
     */
    static type () {
        return BAND;
    }

    /**
     *
     *
     * @param {*} range
     * @returns
     * @memberof BandAxis
     */
    createScale (range) {
        const scale = super.createScale(range);
        const { padding } = this.config();

        if (typeof padding === 'number') {
            scale.padding(padding);
        }
        return scale;
    }

    getMinTickDifference () {
        return this.domain();
    }

    /**
     * This method is used to assign a domain to the axis.
     *
     * @param {Array} domain the domain of the scale
     * @memberof SimpleAxis
     */
    updateDomainBounds (domain) {
        let currentDomain = this.domain();
        if (this.config().domain) {
            currentDomain = this.config().domain;
        } else {
            if (currentDomain.length === 0) {
                currentDomain = domain;
            }
            currentDomain = currentDomain.concat(domain);
        }
        this.domain(currentDomain);
        return this;
    }

    /**
     *
     *
     * @param {*} d
     * @returns
     * @memberof SimpleAxis
     */
    domain (...domain) {
        if (domain.length) {
            this.scale().domain(domain[0]);
            this._domain = this.scale().domain();
            this.smartTicks(this.setTickConfig());
            this.store().commit(DOMAIN, this._domain);
            this.logicalSpace(null);
            return this;
        }
        return this._domain;
    }

    /**
     *
     *
     * @param {*} width
     * @param {*} height
     * @param {*} padding
     * @param {*} isOffset
     * @memberof BandAxis
     */
    setAvailableSpace (width, height, padding, isOffset) {
        const {
            left,
            right,
            top,
            bottom
        } = padding;
        const {
            orientation,
            showAxisName,
            axisNamePadding
        } = this.config();
        const { axisLabelDim } = this.getAxisDimensions();
        const { height: axisDimHeight } = axisLabelDim;

        this.availableSpace({ width, height });
        if (orientation === TOP || orientation === BOTTOM) {
            // Set x axis range
            this.range([0, width - left - right]);
            const axisHeight = this.getLogicalSpace().height - (showAxisName === false ?
                (axisDimHeight + axisNamePadding) : 0);
            isOffset && this.config({ yOffset: Math.max(axisHeight, height) });
        } else {
            // Set y axis range
            this.range([height - bottom, top]);
            const axisWidth = this.getLogicalSpace().width - (showAxisName === false ? axisDimHeight : 0);
            isOffset && this.config({ xOffset: Math.max(axisWidth, width) });
        }
        return this;
    }

    /**
     *
     *
     * @returns
     * @memberof BandAxis
     */
    getUnitWidth () {
        return this.scale().bandwidth();
    }

    /**
     *
     *
     * @returns
     * @memberof BandAxis
     */
    setTickConfig () {
        let smartTicks = '';
        let smartlabel;
        const { maxWidth, maxHeight, tickFormat } = this.config();
        const { labelManager } = this._dependencies;
        const domain = this.axis().scale().domain();

        smartTicks = domain;
        const tickFormatter = tickFormat || (val => val);

        if (domain && domain.length) {
            smartTicks = domain.map((d, i) => {
                labelManager.useEllipsesOnOverflow(true);
                smartlabel = labelManager.getSmartText(tickFormatter(d, i, domain), maxWidth, maxHeight);
                return labelManager.constructor.textToLines(smartlabel);
            });
        }
        return smartTicks;
    }

/**
     * Gets the space occupied by the axis
     *
     * @return {Object} object with details about size of the axis.
     * @memberof SimpleAxis
     */
    getLogicalSpace () {
        if (!this.logicalSpace()) {
            this.logicalSpace(calculateBandSpace(this));
            setOffset(this);
            this.logicalSpace();
        }
        return this.logicalSpace();
    }

     /**
     * Gets the nearest range value from the given range values.
     * @param {number} rangeStart Start range value
     * @param {number} rangeEnd End range value
     * @return {Array} range values
     */
    getNearestRange (rangeStart, rangeEnd) {
        const scale = this.scale();
        const range = scale.range();
        const reverse = range[0] > range[1];

        const extent = scale.invertExtent(rangeStart, rangeEnd);
        const p1 = scale(reverse ? extent[extent.length - 1] : extent[0]);
        const p2 = scale(reverse ? extent[0] : extent[extent.length - 1]) + scale.bandwidth();
        return [p1, p2];
    }

    /**
     *
     *
     * @param {*} axisTickLabels
     * @param {*} labelWidth
     * @returns
     * @memberof BandAxis
     */
    setRotationConfig (axisTickLabels, labelWidth) {
        const { orientation } = this.config();
        const range = this.range();
        const availSpace = Math.abs(range[0] - range[1]);

        this.config({ labels: { rotation: 0, smartTicks: false } });
        if (orientation === TOP || orientation === BOTTOM) {
            const smartWidth = this.smartTicks().reduce((acc, n) => acc + n.width + this._minTickDistance.width, 0);
            // set multiline config
            if (availSpace > 0 && axisTickLabels.length * (labelWidth + this._minTickDistance.width) > availSpace) {
                if (availSpace && smartWidth < availSpace) {
                    this.config({ labels: { smartTicks: true } });
                } else {
                    this.config({ labels: { rotation: -90 } });
                }
            }
        }
        return this;
    }

    /**
     *
     *
     * @returns
     * @memberof BandAxis
     */
    getTickValues () {
        return this.axis().scale().domain();
    }

    /**
     *
     *
     * @returns
     * @memberof SimpleAxis
     */
    getTickSize () {
        const {
            showInnerTicks,
            showOuterTicks
        } = this.config();
        const axis = this.axis();

        axis.tickSizeInner(showInnerTicks ? 6 : 0);
        axis.tickSizeOuter(showOuterTicks ? 6 : 0);
        return axis.tickSize();
    }

    /**
     * Returns the value from the domain when given a value from the range.
     * @param {number} value Value from the range.
     * @return {number} Value
     */
    invert (...value) {
        const values = value.map(d => this.scale().invert(d)) || [];
        return value.length === 1 ? values[0] && values[0].toString() : values.map(d => d.toString());
    }
}
