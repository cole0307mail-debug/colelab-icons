// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TextOutlinedSvg from '@colelab/icons-svg/es/asn/TextOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TextOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TextOutlinedSvg }, slots);
  },
});
