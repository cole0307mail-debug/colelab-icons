// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GarageOutlinedSvg from '@colelab/icons-svg/es/asn/GarageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GarageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GarageOutlinedSvg }, slots);
  },
});
