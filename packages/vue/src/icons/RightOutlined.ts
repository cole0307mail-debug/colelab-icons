// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RightOutlinedSvg from '@colelab/icons-svg/es/asn/RightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RightOutlinedSvg }, slots);
  },
});
