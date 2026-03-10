// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireBrigadeFilledSvg from '@colelab/icons-svg/es/asn/FireBrigadeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireBrigadeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireBrigadeFilledSvg }, slots);
  },
});
