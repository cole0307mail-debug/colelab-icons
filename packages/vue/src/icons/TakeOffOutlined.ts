// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TakeOffOutlinedSvg from '@colelab/icons-svg/es/asn/TakeOffOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TakeOffOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TakeOffOutlinedSvg }, slots);
  },
});
