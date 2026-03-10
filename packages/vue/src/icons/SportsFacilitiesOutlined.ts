// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SportsFacilitiesOutlinedSvg from '@colelab/icons-svg/es/asn/SportsFacilitiesOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SportsFacilitiesOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SportsFacilitiesOutlinedSvg }, slots);
  },
});
