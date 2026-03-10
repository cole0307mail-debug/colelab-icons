// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RightDownOutlinedSvg from '@colelab/icons-svg/es/asn/RightDownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RightDownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RightDownOutlinedSvg }, slots);
  },
});
