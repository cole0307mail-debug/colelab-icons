// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SerialNumberOutlinedSvg from '@colelab/icons-svg/es/asn/SerialNumberOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SerialNumberOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SerialNumberOutlinedSvg }, slots);
  },
});
