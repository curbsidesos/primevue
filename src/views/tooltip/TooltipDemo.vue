<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tooltip</h1>
                <p>Tooltip directive provides advisory information for a component.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Positions</h5>
                <div class="grid p-fluid">
                    <div class="col-12 md:col-3">
                        <InputText type="text" placeholder="Right" v-tooltip.right="'Enter your username'" />
                    </div>
                    <div class="col-12 md:col-3">
                        <InputText type="text" placeholder="Top" v-tooltip.top="'Enter your username'" />
                    </div>
                    <div class="col-12 md:col-3">
                        <InputText type="text" placeholder="Bottom" v-tooltip.bottom="'Enter your username'" />
                    </div>
                    <div class="col-12 md:col-3">
                        <InputText type="text" placeholder="Left" v-tooltip.left="'Enter your username'" />
                    </div>
                </div>

                <h5>Focus and Blur</h5>
                <InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="'Enter your username'" />

                <h5>Button</h5>
                <Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" />
            </div>
        </div>

        <TooltipDoc />
    </div>
</template>

<script>
import TooltipDoc from './TooltipDoc';

export default {
	components: {
		'TooltipDoc': TooltipDoc
	}
}
</script>

<style>

</style>
