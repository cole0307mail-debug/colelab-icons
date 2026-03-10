// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ManualAlarmCircleOutlinedSvg from '@colelab/icons-svg/es/asn/ManualAlarmCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ManualAlarmCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ManualAlarmCircleOutlinedSvg }, slots);
  },
});
