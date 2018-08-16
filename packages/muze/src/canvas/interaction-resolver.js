import { mergeRecursive } from 'muze-utils';
import { SpawnableSideEffect } from 'muze-firebolt';
import { SIDE_EFFECT_COMMON, SIDE_EFFECT_INDIVIDUAL, TOOLTIP_CONSOLIDATED, TOOLTIP_FRAGMENTED }
    from '../enums/constants';

export const defaultInteractionPolicy = {
    sideEffect: SIDE_EFFECT_INDIVIDUAL
};

export const mergeInteractionPolicy = policy => mergeRecursive(mergeRecursive({}, defaultInteractionPolicy), policy);

export const resolveInteractionPolicy = (context, policies) => {
    const { sideEffect, tooltip } = policies;
    const firebolt = context.firebolt();

    if (sideEffect === SIDE_EFFECT_COMMON) {
        firebolt.enable(instance => instance instanceof SpawnableSideEffect);
        const sideEffects = firebolt.sideEffects();

        context.getValueMatrix().each(cell => cell.valueOf().firebolt().disable((instance =>
            instance instanceof SpawnableSideEffect && sideEffects[instance.constructor.formalName()])));
    } else if (sideEffect instanceof Function) {
        sideEffect(context);
    } else {
        firebolt.disable();
    }

    if (tooltip === TOOLTIP_CONSOLIDATED) {
        const tooltipSideEffects = firebolt.sideEffects().tooltip;

        for (const key in tooltipSideEffects) {
            tooltipSideEffects[key].enable();
        }
        context.getValueMatrix().each(cell => cell.valueOf().firebolt().sideEffects().tooltip.disable());
    } else if (tooltip === TOOLTIP_FRAGMENTED) {
        const tooltipSideEffects = firebolt.sideEffects().tooltip;

        for (const key in tooltipSideEffects) {
            tooltipSideEffects[key].disable();
        }

        context.getValueMatrix().each((cell) => {
            const unitFirebolt = cell.valueOf().firebolt();
            unitFirebolt.enableSideEffectOnPropagation('tooltip');
            unitFirebolt.sideEffects().tooltip.enable();
        });
    } else if (tooltip instanceof Function) {
        tooltip(context);
    }
};
