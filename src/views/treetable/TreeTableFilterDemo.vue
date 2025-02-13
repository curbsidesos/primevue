<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Filter</span></h1>
                <p>Filtering is enabled by defining a filter template per column to populate the filters property of the TreTable.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Lenient Filter</h5>
                <TreeTable :value="nodes" :filters="filters1" filterMode="lenient">
                    <template #header>
                        <div class="text-right">
                            <div class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText v-model="filters1['global']" placeholder="Global Search" size="50" />
                            </div>
                        </div>
                    </template>
                    <Column field="name" header="Name" :expander="true">
                        <template #filter>
                            <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name" />
                        </template>
                    </Column>
                    <Column field="size" header="Size">
                        <template #filter>
                            <InputText type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"/>
                        </template>
                    </Column>
                    <Column field="type" header="Type">
                        <template #filter>
                            <InputText type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"/>
                        </template>
                    </Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Strict Filter</h5>
                <TreeTable :value="nodes" :filters="filters2" filterMode="strict">
                    <template #header>
                        <div class="text-right">
                            <div class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText v-model="filters2['global']" placeholder="Global Search" size="50" />
                            </div>
                        </div>
                    </template>
                    <Column field="name" header="Name" :expander="true">
                        <template #filter>
                            <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name" />
                        </template>
                    </Column>
                    <Column field="size" header="Size">
                        <template #filter>
                            <InputText type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size" />
                        </template>
                    </Column>
                    <Column field="type" header="Type">
                        <template #filter>
                            <InputText type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type" />
                        </template>
                    </Column>
                </TreeTable>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Lenient Filter&lt;/h5&gt;
    &lt;TreeTable :value="nodes" :filters="filters1" filterMode="lenient"&gt;
        &lt;template #header&gt;
            &lt;div class="text-right"&gt;
                &lt;div class="p-input-icon-left"&gt;
                    &lt;i class="pi pi-search"&gt;&lt;/i&gt;
                    &lt;InputText v-model="filters1['global']" placeholder="Global Search" size="50" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;Column field="name" header="Name" :expander="true"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="size" header="Size"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"/&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="type" header="Type"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"/&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Strict Filter&lt;/h5&gt;
    &lt;TreeTable :value="nodes" :filters="filters2" filterMode="strict"&gt;
        &lt;template #header&gt;
            &lt;div class="text-right"&gt;
                &lt;div class="p-input-icon-left"&gt;
                    &lt;i class="pi pi-search"&gt;&lt;/i&gt;
                    &lt;InputText v-model="filters2['global']" placeholder="Global Search" size="50" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;Column field="name" header="Name" :expander="true"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="size" header="Size"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="type" header="Type"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            filters1: {},
            filters2: {},
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    }
}
</CodeHighlight>

                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            filters1: {},
            filters2: {},
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    }
}
</script>

<style scoped lang="scss">
.p-filter-column {
    .p-multiselect, .p-dropdown, .p-inputtext {
        width: 100%;
    }
}
</style>