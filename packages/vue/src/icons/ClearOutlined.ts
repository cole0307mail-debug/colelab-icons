// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ClearOutlinedSvg from '@colelab/icons-svg/es/asn/ClearOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ClearOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ClearOutlinedSvg }, slots);
  },
});
