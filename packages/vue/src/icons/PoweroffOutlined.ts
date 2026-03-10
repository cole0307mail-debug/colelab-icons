// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PoweroffOutlinedSvg from '@colelab/icons-svg/es/asn/PoweroffOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PoweroffOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PoweroffOutlinedSvg }, slots);
  },
});
