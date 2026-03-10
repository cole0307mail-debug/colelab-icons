// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LinkOutlinedSvg from '@colelab/icons-svg/es/asn/LinkOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LinkOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LinkOutlinedSvg }, slots);
  },
});
