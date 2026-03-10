// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LinkFilledSvg from '@colelab/icons-svg/es/asn/LinkFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LinkFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LinkFilledSvg }, slots);
  },
});
