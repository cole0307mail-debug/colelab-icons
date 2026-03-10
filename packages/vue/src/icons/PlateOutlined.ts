// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlateOutlinedSvg from '@colelab/icons-svg/es/asn/PlateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlateOutlinedSvg }, slots);
  },
});
