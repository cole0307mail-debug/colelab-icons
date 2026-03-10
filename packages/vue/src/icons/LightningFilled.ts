// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LightningFilledSvg from '@colelab/icons-svg/es/asn/LightningFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LightningFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LightningFilledSvg }, slots);
  },
});
