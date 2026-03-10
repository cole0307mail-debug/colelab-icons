// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ThreadOutlinedSvg from '@colelab/icons-svg/es/asn/ThreadOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ThreadOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ThreadOutlinedSvg }, slots);
  },
});
