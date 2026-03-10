// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DispatchingOutlinedSvg from '@colelab/icons-svg/es/asn/DispatchingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DispatchingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DispatchingOutlinedSvg }, slots);
  },
});
