// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LightningOutlinedSvg from '@colelab/icons-svg/es/asn/LightningOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LightningOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LightningOutlinedSvg }, slots);
  },
});
