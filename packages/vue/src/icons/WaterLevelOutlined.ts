// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WaterLevelOutlinedSvg from '@colelab/icons-svg/es/asn/WaterLevelOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WaterLevelOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WaterLevelOutlinedSvg }, slots);
  },
});
