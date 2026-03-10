// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeftDownOutlinedSvg from '@colelab/icons-svg/es/asn/LeftDownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeftDownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeftDownOutlinedSvg }, slots);
  },
});
