// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RestOutlinedSvg from '@colelab/icons-svg/es/asn/RestOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RestOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RestOutlinedSvg }, slots);
  },
});
