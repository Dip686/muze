import SimpleAxis from '../simple-axis';
import { BAND } from '../../enums/scale-type';
import { TOP, BOTTOM } from '../../enums/axis-orientation';
import { calculateBandSpace } from './helper';
import { setOffset, getRotatedSpaces } from '../common-helper';

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
     *
     * @memberof BandAxis
     */
    setTickConfig () {
        let smartTicks = '';
        let smartlabel;
        const domain = this.domain();
        const { labelManager } = this._dependencies;
        const { tickValues, padding } = this.config();
        const { labels } = this.renderConfig();
        const { height: availHeight, width: availWidth, noWrap } = this.maxTickSpaces();
        const { width, height } = getRotatedSpaces(labels.rotation, availWidth, availHeight);

        tickValues && this.axis().tickValues(tickValues);
        smartTicks = tickValues || domain;

        // set the style on the shared label manager instance
        labelManager.setStyle(this._tickLabelStyle);

        // Update padding between plots
        if (typeof padding === 'number') {
            this.scale().padding(padding);
        }

        if (domain && domain.length) {
            const values = tickValues || domain;
            const tickFormatter = this._tickFormatter(values);
            smartTicks = values.map((d, i) => {
                labelManager.useEllipsesOnOverflow(true);

                smartlabel = labelManager.getSmartText(tickFormatter(d, i), width, height, noWrap);
                return labelManager.constructor.textToLines(smartlabel);
            });
        }
        this.smartTicks(smartTicks);
        return this;
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

    formatTickValue (val) {
        return this.valueParser()(val);
    }

    sanitizeTickFormatter (value) {
        const { tickFormat } = value;

        if (tickFormat) {
            return ticks => (val, i) => tickFormat(this.formatTickValue(val), val, i, ticks);
        }
        return () => val => this.formatTickValue(val);
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

    invertExtent (v1, v2) {
        return this.scale().invertExtent(v1, v2);
    }

    /**
     * Gets the nearest range value from the given range values.
     * @param {number} v1 Start range value
     * @param {number} v2 End range value
     * @return {Array} range values
     */
    getNearestRange (v1, v2) {
        const scale = this.scale();
        const range = scale.range();
        const reverse = range[0] > range[1];

        const extent = this.invertExtent(v1, v2);
        const p1 = scale(reverse ? extent[extent.length - 1] : extent[0]);
        const p2 = scale(reverse ? extent[0] : extent[extent.length - 1]) + scale.bandwidth();
        return [p1, p2];
    }
}
