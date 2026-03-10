// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OneToOneOutlinedSvg from '@colelab/icons-svg/es/asn/OneToOneOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OneToOneOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OneToOneOutlinedSvg }, slots);
  },
});
