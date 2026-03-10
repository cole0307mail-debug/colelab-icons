// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BeautySalonFilledSvg from '@colelab/icons-svg/es/asn/BeautySalonFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BeautySalonFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BeautySalonFilledSvg }, slots);
  },
});
