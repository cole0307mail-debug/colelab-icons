// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NextOutlinedSvg from '@colelab/icons-svg/es/asn/NextOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NextOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NextOutlinedSvg }, slots);
  },
});
