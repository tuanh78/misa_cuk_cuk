<template>
  <date-pick
    v-model="date"
    :displayFormat="dateStringFormat"
    :inputAttributes="{
      class: 'custom-datepicker',
      style: 'width: 90%; height: 40px; font-size: 13px; border: 1px solid #BBBBBB; border-radius: 4px; outline: none',
      placeholder: dateStringFormat
    }"
    :weekdays="localeDatePicker.weekdays"
    :months="localeDatePicker.months"
    :isDateDisabled="isDateDisabled"
  ></date-pick>
</template>
<script>
import DatePick from 'vue-date-pick'
import 'vue-date-pick/dist/vueDatePick.css'
import { ConstantValue } from '../../../constant/common'
export default {
  components: { DatePick },
  data () {
    return {
      dateStringFormat: ConstantValue.DATE_FORMAT_STRING,
      date: '',
      localeDatePicker: {
        weekdays: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        months: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12'
        ]
      }
    }
  },
  methods: {
    isDateDisabled (date) {
      return date > new Date()
    }
  },
  watch: {
    date (newValue, oldValue) {
      this.$emit('updateDate', newValue)
    }
  }
}
</script>
<style scoped lang="scss">
@import "../../../scss/_variables.scss";
</style>
