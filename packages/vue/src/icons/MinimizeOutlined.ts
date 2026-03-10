// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinimizeOutlinedSvg from '@colelab/icons-svg/es/asn/MinimizeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinimizeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinimizeOutlinedSvg }, slots);
  },
});
