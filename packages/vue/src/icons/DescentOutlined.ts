// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DescentOutlinedSvg from '@colelab/icons-svg/es/asn/DescentOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DescentOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DescentOutlinedSvg }, slots);
  },
});
