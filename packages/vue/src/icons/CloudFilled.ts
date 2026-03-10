// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloudFilledSvg from '@colelab/icons-svg/es/asn/CloudFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloudFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloudFilledSvg }, slots);
  },
});
