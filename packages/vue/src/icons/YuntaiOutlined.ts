// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import YuntaiOutlinedSvg from '@colelab/icons-svg/es/asn/YuntaiOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'YuntaiOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: YuntaiOutlinedSvg }, slots);
  },
});
