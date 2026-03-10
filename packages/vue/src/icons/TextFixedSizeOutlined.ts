// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TextFixedSizeOutlinedSvg from '@colelab/icons-svg/es/asn/TextFixedSizeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TextFixedSizeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TextFixedSizeOutlinedSvg }, slots);
  },
});
