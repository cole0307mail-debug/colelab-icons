// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EraserOutlinedSvg from '@colelab/icons-svg/es/asn/EraserOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EraserOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EraserOutlinedSvg }, slots);
  },
});
