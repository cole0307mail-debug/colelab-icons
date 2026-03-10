// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CoOutlinedSvg from '@colelab/icons-svg/es/asn/CoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CoOutlinedSvg }, slots);
  },
});
