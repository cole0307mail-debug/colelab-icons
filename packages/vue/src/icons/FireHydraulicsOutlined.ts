// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHydraulicsOutlinedSvg from '@colelab/icons-svg/es/asn/FireHydraulicsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHydraulicsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHydraulicsOutlinedSvg }, slots);
  },
});
