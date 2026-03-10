// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import InfoOutlinedSvg from '@colelab/icons-svg/es/asn/InfoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'InfoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: InfoOutlinedSvg }, slots);
  },
});
