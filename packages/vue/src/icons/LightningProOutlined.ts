// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LightningProOutlinedSvg from '@colelab/icons-svg/es/asn/LightningProOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LightningProOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LightningProOutlinedSvg }, slots);
  },
});
