// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireBrigadeOutlinedSvg from '@colelab/icons-svg/es/asn/FireBrigadeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireBrigadeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireBrigadeOutlinedSvg }, slots);
  },
});
