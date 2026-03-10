// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHazardOutlinedSvg from '@colelab/icons-svg/es/asn/FireHazardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHazardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHazardOutlinedSvg }, slots);
  },
});
