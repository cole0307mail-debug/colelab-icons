// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GlobalOutlinedSvg from '@colelab/icons-svg/es/asn/GlobalOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GlobalOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GlobalOutlinedSvg }, slots);
  },
});
