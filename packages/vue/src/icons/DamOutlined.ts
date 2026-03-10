// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DamOutlinedSvg from '@colelab/icons-svg/es/asn/DamOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DamOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DamOutlinedSvg }, slots);
  },
});
