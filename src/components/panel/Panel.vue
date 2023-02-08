<template>
    <div :class="containerClass">
        <div class="p-panel-header">
            <slot name="header">
                <span class="p-panel-title" v-if="header" :id="ariaId + '_header'">{{header}}</span>
            </slot>
            <div class="p-panel-icons">
                <slot name="icons"></slot>
                <button v-if="toggleable" class="p-panel-header-icon p-panel-toggler p-link" @click="toggle" type="button"
                    :id="ariaId +  '_header'" :aria-controls="ariaId + '_content'" :aria-expanded="!d_collapsed" v-ripple>
                    <template v-if="iconProps !== undefined && Object.keys(iconProps).length !== 0">
                        <template v-if="d_collapsed">
                            <span v-html="iconProps.showIcon"></span>
                        </template>
                        <template v-else>
                            <span v-html="iconProps.closeIcon"></span>
                        </template>
                    </template>
                    <template v-else>
                        <span :class="{'pi pi-minus': !d_collapsed, 'pi pi-plus': d_collapsed}"></span>
                    </template>
                </button>
            </div>
        </div>
        <transition name="p-toggleable-content">
            <div class="p-toggleable-content" v-show="!d_collapsed" role="region" :id="ariaId + '_content'" :aria-labelledby="ariaId + '_header'">
                <div class="p-panel-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';
import Ripple from '../ripple/Ripple';

export default {
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        iconProps: Object,
    },
    data() {
        return {
            d_collapsed: this.collapsed
        }
    },
    watch: {
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-panel p-component', {'p-panel-toggleable': this.toggleable}];
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('update:collapsed', this.d_collapsed);
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.p-panel-title {
    line-height: 1;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
</style>
