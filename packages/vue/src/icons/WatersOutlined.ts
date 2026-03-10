// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WatersOutlinedSvg from '@colelab/icons-svg/es/asn/WatersOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WatersOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WatersOutlinedSvg }, slots);
  },
});
