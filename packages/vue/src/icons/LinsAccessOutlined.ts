// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LinsAccessOutlinedSvg from '@colelab/icons-svg/es/asn/LinsAccessOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LinsAccessOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LinsAccessOutlinedSvg }, slots);
  },
});
