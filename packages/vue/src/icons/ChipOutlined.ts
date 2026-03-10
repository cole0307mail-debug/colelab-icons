// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ChipOutlinedSvg from '@colelab/icons-svg/es/asn/ChipOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ChipOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ChipOutlinedSvg }, slots);
  },
});
