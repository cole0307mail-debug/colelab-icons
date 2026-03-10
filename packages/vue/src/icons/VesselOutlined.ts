// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VesselOutlinedSvg from '@colelab/icons-svg/es/asn/VesselOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VesselOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VesselOutlinedSvg }, slots);
  },
});
