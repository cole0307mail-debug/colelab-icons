// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoSwimmingOutlinedSvg from '@colelab/icons-svg/es/asn/NoSwimmingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoSwimmingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoSwimmingOutlinedSvg }, slots);
  },
});
