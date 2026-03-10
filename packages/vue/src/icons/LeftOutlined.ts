// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeftOutlinedSvg from '@colelab/icons-svg/es/asn/LeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeftOutlinedSvg }, slots);
  },
});
