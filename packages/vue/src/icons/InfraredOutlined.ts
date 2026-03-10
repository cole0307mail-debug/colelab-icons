// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import InfraredOutlinedSvg from '@colelab/icons-svg/es/asn/InfraredOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'InfraredOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: InfraredOutlinedSvg }, slots);
  },
});
