import { ScrollMaker } from './scroll-maker';
import { createScrollBarRect, createScrollBarArrow } from './helper';
import { VERTICAL } from '../../../constants';

export class VerticalScrollMaker extends ScrollMaker {

    static type () {
        return VERTICAL;
    }

    createScroll (mountPoint, dimensions = this.logicalSpace()) {
        const config = this.config();
        const { scrollBarContainer } = super.createScroll(mountPoint, dimensions);
        const prevArrow = createScrollBarArrow(scrollBarContainer, 'top', config);
        const moverRect = createScrollBarRect(scrollBarContainer, config);
        const nextArrow = createScrollBarArrow(scrollBarContainer, 'bottom', config);
        const {
            mover,
            rect
        } = moverRect;

        const { height, width, totalLength, viewLength } = this.logicalSpace();
        const scrollBarWithouArrowLength = height - width * 2;

        rect.style('height', `${scrollBarWithouArrowLength}px`);
        rect.style('width', `${100}%`);
        mover.style('width', `${100}%`);
        mover.style('height', `${(viewLength * scrollBarWithouArrowLength) / totalLength}px`);
        mover.style('top', `${0}px`);

        this._components = {
            prevArrow,
            nextArrow,
            moverRect,
            scrollBarContainer
        };
        this._scrollBarWithouArrowLength = scrollBarWithouArrowLength;
        this.registerListeners();
    }

    emptyScrollAreaClick (event, moverRect) {
        const {
            mover,
            rect
        } = moverRect;
        const speed = this.config().speed;
        const { x, y } = mover.node().getBoundingClientRect();
        const { x: rectX, y: rectY } = rect.node().getBoundingClientRect();

        let positionAdjuster = speed * 10;
        if (event.y < y) {
            positionAdjuster = -speed * 10;
        }
        this.changeMoverPosition(moverRect, { x: x - rectX + positionAdjuster, y: y - rectY + positionAdjuster });
    }

    changeMoverPosition (moverRect, newPosition) {
        let currentPos;
        const {
            mover,
            rect
        } = moverRect;
        const {
            totalLength
         } = this.logicalSpace();
        const rectStartPos = rect.node().getBoundingClientRect();
        const moverPos = mover.node().getBoundingClientRect();

        if (newPosition.y < 0) {
            currentPos = 0;
        } else if (newPosition.y + moverPos.height > rectStartPos.height) {
            currentPos = rectStartPos.height - moverPos.height;
        } else {
            currentPos = newPosition.y;
        }
        mover.style('top', `${currentPos}px`);
        const totalDistance = this._scrollBarWithouArrowLength - rectStartPos.y;
        const movedViewLength = (currentPos * totalLength) / totalDistance;

        this._attachedScrollAction(this.constructor.type(), movedViewLength);
    }

}
