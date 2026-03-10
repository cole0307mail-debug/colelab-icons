// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BellOutlinedSvg from '@colelab/icons-svg/es/asn/BellOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BellOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BellOutlinedSvg }, slots);
  },
});
