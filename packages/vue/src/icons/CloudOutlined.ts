// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloudOutlinedSvg from '@colelab/icons-svg/es/asn/CloudOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloudOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloudOutlinedSvg }, slots);
  },
});
