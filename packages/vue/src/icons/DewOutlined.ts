// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DewOutlinedSvg from '@colelab/icons-svg/es/asn/DewOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DewOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DewOutlinedSvg }, slots);
  },
});
