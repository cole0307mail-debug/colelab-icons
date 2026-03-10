// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ToTopOutlinedSvg from '@colelab/icons-svg/es/asn/ToTopOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ToTopOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ToTopOutlinedSvg }, slots);
  },
});
