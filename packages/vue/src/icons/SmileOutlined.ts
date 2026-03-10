// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmileOutlinedSvg from '@colelab/icons-svg/es/asn/SmileOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmileOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmileOutlinedSvg }, slots);
  },
});
