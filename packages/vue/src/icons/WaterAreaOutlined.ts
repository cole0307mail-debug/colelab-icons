// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WaterAreaOutlinedSvg from '@colelab/icons-svg/es/asn/WaterAreaOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WaterAreaOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WaterAreaOutlinedSvg }, slots);
  },
});
