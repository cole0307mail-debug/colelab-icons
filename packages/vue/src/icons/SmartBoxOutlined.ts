// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartBoxOutlinedSvg from '@colelab/icons-svg/es/asn/SmartBoxOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartBoxOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartBoxOutlinedSvg }, slots);
  },
});
