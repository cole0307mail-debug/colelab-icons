// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FiremenOutlinedSvg from '@colelab/icons-svg/es/asn/FiremenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FiremenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FiremenOutlinedSvg }, slots);
  },
});
