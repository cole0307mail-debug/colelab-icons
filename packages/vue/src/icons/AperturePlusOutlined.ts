// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AperturePlusOutlinedSvg from '@colelab/icons-svg/es/asn/AperturePlusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AperturePlusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AperturePlusOutlinedSvg }, slots);
  },
});
