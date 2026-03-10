// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SluiceGateOutlinedSvg from '@colelab/icons-svg/es/asn/SluiceGateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SluiceGateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SluiceGateOutlinedSvg }, slots);
  },
});
