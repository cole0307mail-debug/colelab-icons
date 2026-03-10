// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CircleOutlinedSvg from '@colelab/icons-svg/es/asn/CircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CircleOutlinedSvg }, slots);
  },
});
