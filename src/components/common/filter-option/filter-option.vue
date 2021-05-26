<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        dense
        borderless
        v-model="selectedValue"
        use-input
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        emit-value
        map-options
        style="width: 90%; height: 40px; margin: 0; padding-left: 16px;"
        color="green"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Không có kết quả
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      selectedValue: this.selectedOption,
      options: this.optionValues
    }
  },
  props: {
    optionValues: {
      type: Array
    },
    selectedOption: {
      type: Object
    }
  },

  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = this.optionValues

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = this.optionValues.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  watch: {
    selectedValue (newValue, oldValue) {
      this.$emit('updateValue', newValue)
    }
  }
}
</script>
<style scoped lang="scss">
.q-pa-md {
  padding: 16px 0px;
}
</style>
