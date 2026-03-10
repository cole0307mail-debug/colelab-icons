// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeatUpOutlinedSvg from '@colelab/icons-svg/es/asn/HeatUpOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeatUpOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeatUpOutlinedSvg }, slots);
  },
});
