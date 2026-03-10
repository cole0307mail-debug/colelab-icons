// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeftUpOutlinedSvg from '@colelab/icons-svg/es/asn/LeftUpOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeftUpOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeftUpOutlinedSvg }, slots);
  },
});
