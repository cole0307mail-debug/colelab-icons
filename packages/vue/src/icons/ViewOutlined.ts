// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ViewOutlinedSvg from '@colelab/icons-svg/es/asn/ViewOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ViewOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ViewOutlinedSvg }, slots);
  },
});
